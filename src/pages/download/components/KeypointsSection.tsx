import type { ReactNode } from "react";

import { assets } from "../assets";
import { responsive } from "../responsive";

type KeypointProps = {
  label: string;
  titleLines: string[];
  descLines: string[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  reverse?: boolean;
  alignRight?: boolean;
  extra?: ReactNode;
};

function Keypoint({
  label,
  titleLines,
  descLines,
  imageSrc,
  imageAlt,
  imageClassName,
  reverse,
  alignRight,
  extra,
}: KeypointProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-[40px] lg:flex-row lg:gap-[72px]",

        reverse ? "lg:flex-row-reverse lg:justify-start" : "",
      ].join(" ")}
    >
      <div className="shrink-0">
        <img
          alt={imageAlt}
          className={[
            "w-full max-w-[800px] rounded-[16px]",
            imageClassName ?? "",
          ].join(" ")}
          src={imageSrc}
        />
      </div>

      <div
        className={[
          "pt-0",
          alignRight ? "lg:text-right lg:items-end" : "",
          "flex flex-col gap-6",
        ].join(" ")}
      >
        <div
          className={[
            "flex flex-col gap-2",
            alignRight ? "items-end" : "items-start",
          ].join(" ")}
        >
          <div className="text-[20px] font-medium text-[#ffbf00]">{label}</div>
          <div className="text-[28px] font-bold leading-[1.2] text-[#212121] sm:text-[32px] sm:leading-[1.6]">
            {titleLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>
        <div className="text-[18px] font-medium leading-[1.6] text-[#7e7e7b] sm:text-[20px]">
          {descLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        {extra}
      </div>
    </div>
  );
}

export function KeypointsSection() {
  return (
    <>
      <section
        className={["bg-[#ffffff] py-[160px]", responsive.showOnlyDesktop].join(
          " ",
        )}
      >
        <div className="mx-auto flex max-w-[1320px] flex-col gap-[160px] px-6">
          <Keypoint
            descLines={[
              "노트북이 있는 곳이라면 언제 어디서든 실행 가능해요",
              "온디바이스 구조로 프라이버시 걱정 없이 안전하게",
            ]}
            imageAlt="Keypoint 1"
            imageSrc={assets.keypoints.kp1}
            label="Keypoint 1"
            titleLines={["별도의 장비없이", "설치 한 번이면 끝!"]}
          />

          <Keypoint
            alignRight
            descLines={[
              "바른 자세를 유지할수록 캐릭터는 더 빨리 달리고",
              "더 빨리 레벨업해서 보상을 받을 수 있어요.",
            ]}
            imageAlt="Keypoint 2"
            imageClassName="!max-w-[635px]"
            imageSrc={assets.keypoints.kp2}
            label="Keypoint 2"
            reverse
            titleLines={[
              "방해되지 않는 귀여움,",
              "당신과 함께 쑥쑥 자라는 캐릭터",
            ]}
          />

          <Keypoint
            descLines={[
              "매일의 작은 변화가 모이는 공간",
              "오늘의 리포트, 거북목 추이, 자세 개선 팁을",
              "한 눈에 파악 가능해요.",
            ]}
            imageAlt="Keypoint 3"
            imageSrc={assets.keypoints.kp3}
            label="Keypoint 3"
            titleLines={["나의 성장을 확인하는", "대시보드"]}
          />

          <Keypoint
            alignRight
            descLines={[
              "한 단계 높은 개입을 통해 위젯으로",
              "교정되지 않은 장시간 거북목 상태를 완화시켜줘요.",
            ]}
            extra={
              <div className="mt-10">
                <img
                  alt=""
                  className="w-[361px] max-w-full"
                  src={assets.keypoints.kp4Notif}
                />
              </div>
            }
            imageAlt="Keypoint 4"
            imageSrc={assets.keypoints.kp4}
            label="Keypoint 4"
            reverse
            titleLines={["간편한 맞춤형 알림"]}
          />

          <div className="flex flex-col items-start gap-[40px] lg:flex-row lg:gap-[72px]">
            <div className="flex shrink-0 flex-col items-center gap-6">
              <img
                alt=""
                className="w-[276px] max-w-full"
                src={assets.keypoints.kp5Min}
              />
              <img
                alt="Keypoint 5"
                className="w-[275px] max-w-full"
                src={assets.keypoints.kp5Med}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-[20px] font-medium text-[#ffbf00]">
                  Keypoint 5
                </div>
                <div className="text-[28px] font-bold leading-[1.2] text-[#212121] sm:text-[32px] sm:leading-[1.6]">
                  <div>나의 성장을 확인하는</div>
                  <div>대시보드</div>
                </div>
              </div>
              <div className="text-[18px] font-medium leading-[1.6] text-[#7e7e7b] sm:text-[20px]">
                <div>매일의 작은 변화가 모이는 공간</div>
                <div>오늘의 리포트, 거북목 추이, 자세 개선 팁을</div>
                <div>한 눈에 파악 가능해요.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={["bg-white py-[100px]", responsive.showOnlyTablet].join(" ")}
      >
        <div className="mx-auto flex max-w-[720px] flex-col gap-[120px] px-4">
          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 1"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.tabletKp1}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">
                Keypoint 1
              </div>
              <div className="text-[28px] font-bold leading-[1.5] text-[#212121]">
                <div>별도의 장비없이</div>
                <div>설치 한 번이면 끝!</div>
              </div>
              <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>노트북이 있는 곳이라면 언제 어디서든 실행 가능해요</div>
                <div>온디바이스 구조로 프라이버시 걱정 없이 안전하게</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 2"
              className="w-full rounded-[16px]"
              src={assets.keypoints.tabletKp2}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">
                Keypoint 2
              </div>
              <div className="text-[28px] font-bold leading-[1.5] text-[#212121]">
                <div>방해되지 않는 귀여움,</div>
                <div>당신과 함께 쑥쑥 자라는 캐릭터</div>
              </div>
              <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>바른 자세를 유지할수록 캐릭터는 더 빨리 달리고</div>
                <div>더 빨리 레벨업해서 보상을 받을 수 있어요.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 3"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.tabletKp3}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">
                Keypoint 3
              </div>
              <div className="text-[28px] font-bold leading-[1.5] text-[#212121]">
                <div>나의 성장을 확인하는</div>
                <div>대시보드</div>
              </div>
              <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>매일의 작은 변화가 모이는 공간</div>
                <div>오늘의 리포트, 거북목 추이, 자세 개선 팁을</div>
                <div>한 눈에 파악 가능해요.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 4"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.tabletKp4}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">
                Keypoint 4
              </div>
              <div className="text-[28px] font-bold leading-[1.5] text-[#212121]">
                간편한 맞춤형 알림
              </div>
              <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>한 단계 높은 개입을 통해 위젯으로</div>
                <div>교정되지 않은 장시간 거북목 상태를 완화시켜줘요.</div>
              </div>
              <div className="mt-4">
                <img
                  alt=""
                  className="w-full max-w-[360px]"
                  src={assets.keypoints.tabletKp4Notif}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div className="relative h-[680px] w-full">
              <img
                alt=""
                className="absolute left-0 top-0 w-[361px] max-w-full"
                src={assets.keypoints.tabletKp5Min}
              />
              <img
                alt="Keypoint 5"
                className="absolute bottom-0 left-0 w-[353px] max-w-full"
                src={assets.keypoints.tabletKp5Med}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 5
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                <div>나의 성장을 확인하는</div>
                <div>대시보드</div>
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>매일의 작은 변화가 모이는 공간</div>
                <div>오늘의 리포트, 거북목 추이, 자세 개선 팁을</div>
                <div>한 눈에 파악 가능해요.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={["bg-white py-[100px]", responsive.showOnlyMobile].join(" ")}
      >
        <div className="mx-auto flex max-w-[320px] flex-col gap-[120px] px-4">
          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 1"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.mobileKp1}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 1
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                <div>별도의 장비없이</div>
                <div>설치 한 번이면 끝!</div>
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>노트북이 있는 곳이라면 언제 어디서든 실행 가능해요</div>
                <div>온디바이스 구조로 프라이버시 걱정 없이 안전하게</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 2"
              className="w-full rounded-[16px]"
              src={assets.keypoints.mobileKp2}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 2
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                <div>방해되지 않는 귀여움,</div>
                <div>당신과 함께 쑥쑥 자라는 캐릭터</div>
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>바른 자세를 유지할수록 캐릭터는 더 빨리 달리고</div>
                <div>더 빨리 레벨업해서 보상을 받을 수 있어요.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 3"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.mobileKp3}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 3
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                <div>나의 성장을 확인하는</div>
                <div>대시보드</div>
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>매일의 작은 변화가 모이는 공간</div>
                <div>오늘의 리포트, 거북목 추이, 자세 개선 팁을</div>
                <div>한 눈에 파악 가능해요.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 4"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.mobileKp4}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 4
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                간편한 맞춤형 알림
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>한 단계 높은 개입을 통해 위젯으로</div>
                <div>교정되지 않은 장시간 거북목 상태를 완화시켜줘요.</div>
              </div>
              <div className="mt-4">
                <img
                  alt=""
                  className="w-full max-w-[288px]"
                  src={assets.keypoints.mobileKp4Notif}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div className="relative h-[533px] w-full">
              <img
                alt=""
                className="absolute left-1/2 top-0 w-[288px] -translate-x-1/2"
                src={assets.keypoints.mobileKp5Min}
              />
              <img
                alt="Keypoint 5"
                className="absolute left-1/2 top-[102px] w-[288px] -translate-x-1/2"
                src={assets.keypoints.mobileKp5Med}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">
                Keypoint 5
              </div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
                <div>나의 성장을 확인하는</div>
                <div>대시보드</div>
              </div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>매일의 작은 변화가 모이는 공간</div>
                <div>오늘의 리포트, 거북목 추이, 자세 개선 팁을</div>
                <div>한 눈에 파악 가능해요.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
