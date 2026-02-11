import { useCallback, useEffect, useMemo, useState } from "react";

import { Button, TextField } from "@gbgr/ui";

import { assets } from "../assets";
import { responsive } from "../responsive";

type DownloadLinks = {
  macArm64Dmg: string;
  macX64Dmg: string;
  windowsExe: string;
  releasePage: string;
};

const fallbackReleaseTag = "v0.1.3";
const fallbackReleaseBase = `https://github.com/kusitms-bugi/FE/releases/download/${fallbackReleaseTag}`;

const fallbackDownloadLinks: DownloadLinks = {
  macArm64Dmg: `${fallbackReleaseBase}/bugi-0.1.3-arm64.dmg`,
  macX64Dmg: `${fallbackReleaseBase}/bugi-0.1.3-x64.dmg`,
  windowsExe: `${fallbackReleaseBase}/GBGR-Setup-0.1.3.exe`,
  releasePage: `https://github.com/kusitms-bugi/FE/releases/tag/${fallbackReleaseTag}`,
};

type GithubReleaseResponse = {
  html_url?: string;
  assets?: Array<{
    name?: string;
    browser_download_url?: string;
  }>;
};

function pickAssetUrl(
  assets: GithubReleaseResponse["assets"],
  predicate: (name: string) => boolean,
) {
  for (const asset of assets ?? []) {
    const name = asset.name ?? "";
    const url = asset.browser_download_url ?? "";
    if (!name || !url) continue;
    if (predicate(name)) return url;
  }
  return null;
}

async function resolveLatestDownloadLinks(): Promise<DownloadLinks> {
  const endpoint = "https://api.github.com/repos/kusitms-bugi/FE/releases/latest";
  const response = await fetch(endpoint, { headers: { Accept: "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`Failed to fetch latest release: ${response.status}`);
  const data = (await response.json()) as GithubReleaseResponse;

  const macArm64Dmg =
    pickAssetUrl(data.assets, (name) => /arm64\.dmg$/i.test(name)) ??
    pickAssetUrl(data.assets, (name) => /arm64.*\.dmg$/i.test(name));

  const macX64Dmg =
    pickAssetUrl(data.assets, (name) => /x64\.dmg$/i.test(name)) ??
    pickAssetUrl(data.assets, (name) => /x64.*\.dmg$/i.test(name)) ??
    pickAssetUrl(data.assets, (name) => /intel.*\.dmg$/i.test(name));

  const windowsExe =
    pickAssetUrl(data.assets, (name) => /setup.*\.exe$/i.test(name)) ??
    pickAssetUrl(data.assets, (name) => /\.exe$/i.test(name));

  if (!macArm64Dmg || !macX64Dmg || !windowsExe) {
    throw new Error("Latest release assets missing expected files");
  }

  return {
    macArm64Dmg,
    macX64Dmg,
    windowsExe,
    releasePage: data.html_url || "https://github.com/kusitms-bugi/FE/releases/latest",
  };
}

function isLikelyEmail(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

type EmailFormProps = {
  className?: string;
};

function EmailForm({ className }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string>("");

  const canSend = useMemo(
    () => status !== "sending" && isLikelyEmail(email),
    [email, status],
  );

  const onSend = useCallback(async () => {
    const trimmed = email.trim();
    if (!isLikelyEmail(trimmed)) {
      setStatus("error");
      setMessage("이메일 형식을 확인해 주세요.");
      return;
    }

    setStatus("sending");
    setMessage("");

    // NOTE:
    // - 브라우저(프론트)에서 “직접 이메일 발송”은 불가능합니다(메일 API 키가 노출됨).
    // - 실제 발송을 하려면 서버/서버리스(/api/send-download-link 같은 엔드포인트)가 필요해요.
    // - 지금은 임시로 mailto:로 메일 앱을 열어주는 방식으로 동작합니다.
    try {
      const downloadUrl = window.location.href;
      const subject = encodeURIComponent("[거부기린] 다운로드 링크");
      const body = encodeURIComponent(
        `거부기린 다운로드 링크입니다:\n\n${downloadUrl}\n`,
      );
      window.location.href = `mailto:${encodeURIComponent(trimmed)}?subject=${subject}&body=${body}`;

      setStatus("sent");
      setMessage("메일 앱이 열렸어요. 전송을 완료해 주세요.");
    } catch {
      setStatus("error");
      setMessage("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
    }
  }, [email]);

  return (
    <div className={["flex flex-col gap-2", className].filter(Boolean).join(" ")}>
      <TextField
        className="gbgr-text-field--compact w-full"
        inputMode="email"
        onChange={(event) => {
          setEmail((event.target as HTMLInputElement).value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage("");
          }
        }}
        placeholder="geoboogirin@gmail.com"
        type="email"
        value={email}
      />
      <Button
        className="w-full"
        disabled={!canSend}
        type="button"
        onPress={onSend}
      >
        {status === "sending" ? "전송 중..." : "이메일 전송"}
      </Button>
      {message ? (
        <p
          className={[
            "mt-1 text-[11px] font-medium leading-[1.5]",
            status === "error" ? "text-red-600" : "text-[#7e7e7b]",
          ].join(" ")}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}

export function Hero() {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>(fallbackDownloadLinks);

  useEffect(() => {
    let cancelled = false;

    const storageKey = "gbgr.downloadLinks.latest";
    const maxAgeMs = 1000 * 60 * 60; // 1 hour

    const load = async () => {
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw) as { updatedAt: number; links: DownloadLinks };
          if (parsed?.updatedAt && parsed?.links && Date.now() - parsed.updatedAt < maxAgeMs) {
            setDownloadLinks(parsed.links);
            return;
          }
        }
      } catch {
        // ignore cache errors
      }

      try {
        const latest = await resolveLatestDownloadLinks();
        if (cancelled) return;
        setDownloadLinks(latest);
        try {
          window.localStorage.setItem(storageKey, JSON.stringify({ updatedAt: Date.now(), links: latest }));
        } catch {
          // ignore
        }
      } catch {
        // ignore and keep fallback
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section
        className={["bg-[#f9f8f7] pt-[72px]", responsive.showOnlyDesktop].join(
          " ",
        )}
      >
        <div className="mx-auto flex max-w-[1016px] flex-col items-center px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <h1 className="text-[44px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#212121] sm:text-[58px] sm:leading-[1.6]">
              거부기린 다운로드
            </h1>
            <p className="text-[18px] font-semibold leading-[1.5] text-[#6a6966] sm:text-[20px]">
              <span className="block">실시간 거북목 측정과 피드백을 통해</span>
              <span className="block">
                자세 변화를 즉시 인지하고 교정할 수 있어요.
              </span>
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#ffcb31] px-6 py-3 text-[18px] font-medium text-black"
                href={downloadLinks.macArm64Dmg}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" className="size-6" src={assets.hero.iconApple} />
                macOS용 다운로드
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#ffcb31] px-6 py-3 text-[18px] font-medium text-black"
                href={downloadLinks.windowsExe}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" className="size-6" src={assets.hero.iconWindows} />
                Window용 다운로드
              </a>
            </div>
            <a
              className="text-[14px] font-medium text-[#7e7e7b] underline"
              href={downloadLinks.macX64Dmg}
              rel="noreferrer"
              target="_blank"
            >
              Intel 기반 macOS용 다운로드
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1320px] px-6 pb-[96px]">
          <img
            alt="거부기린 서비스 화면"
            className="w-full"
            src={assets.hero.mock}
          />
        </div>
      </section>

      <section
        className={[
          "bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_50%,#FFE28A_75%,#FFBF00_100%)] pt-[68px]",
          responsive.showOnlyTablet,
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-[40px] px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[36px] font-extrabold leading-[1.5] tracking-[-0.02em] text-[#212121]">
                거부기린 다운로드
              </h1>
              <p className="text-[16px] font-medium leading-[1.5] text-[#6a6966]">
                <span className="block">
                  실시간 거북목 측정과 피드백을 통해
                </span>
                <span className="block">
                  자세 변화를 즉시 인지하고 교정할 수 있어요.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full max-w-[360px]">
            <EmailForm />
            <p className="mt-4 text-[10px] font-medium leading-[1.5] text-[#7e7e7b]">
              <span className="block">거부기린은 PC에서만 사용 가능해요.</span>
              <span className="block">
                이메일을 입력해주시면 링크와 함께 알림을 보내드려요.
              </span>
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="mx-auto max-w-[760px] px-4 pb-[24px] pt-[24px]">
            <img
              alt="거부기린 서비스 화면"
              className="w-full"
              src={assets.hero.tabletMock}
            />
          </div>
        </div>
      </section>

      <section
        className={[
          "bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_50%,#FFE28A_75%,#FFBF00_100%)] pt-[68px]",
          responsive.showOnlyMobile,
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-[320px] flex-col items-center gap-[40px] px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[24px] font-extrabold leading-[1.5] tracking-[-0.02em] text-[#212121]">
                거부기린 다운로드
              </h1>
              <p className="text-[14px] font-medium leading-[1.5] text-[#6a6966]">
                <span className="block">
                  실시간 거북목 측정과 피드백을 통해
                </span>
                <span className="block">
                  자세 변화를 즉시 인지하고 교정할 수 있어요.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full">
            <EmailForm />
            <p className="mt-4 text-[10px] font-medium leading-[1.5] text-[#7e7e7b]">
              <span className="block">거부기린은 PC에서만 사용 가능해요.</span>
              <span className="block">
                이메일을 입력해주시면 링크와 함께 알림을 보내드려요.
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="mx-auto max-w-[360px] px-4 pb-[24px] pb-[133px]">
            <img
              alt="거부기린 서비스 화면"
              className="w-full"
              src={assets.hero.mobileMock}
            />
          </div>
        </div>
      </section>
    </>
  );
}
