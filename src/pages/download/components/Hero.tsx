import { assets } from "../assets";
import { responsive } from "../responsive";

export function Hero() {
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
                href="#"
              >
                <img alt="" className="size-6" src={assets.hero.iconApple} />
                macOS용 다운로드
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#ffcb31] px-6 py-3 text-[18px] font-medium text-black"
                href="#"
              >
                <img alt="" className="size-6" src={assets.hero.iconWindows} />
                Window용 다운로드
              </a>
            </div>
            <a
              className="text-[14px] font-medium text-[#7e7e7b] underline"
              href="#"
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
            <div className="flex flex-col gap-2">
              <input
                className="h-10 w-full rounded-full border border-[#e3e1df] bg-white px-5 text-[16px] font-normal text-[#212121] placeholder:text-[#a8a7a4]"
                placeholder="geoboogirin@gmail.com"
                type="email"
              />
              <button
                className="h-10 w-full rounded-full bg-[#ffcb31] text-[16px] font-medium text-black"
                type="button"
              >
                이메일 전송
              </button>
            </div>
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
            <div className="flex flex-col gap-2">
              <input
                className="h-10 w-full rounded-full border border-[#e3e1df] bg-white px-5 text-[16px] font-normal text-[#212121] placeholder:text-[#a8a7a4]"
                placeholder="geoboogirin@gmail.com"
                type="email"
              />
              <button
                className="h-10 w-full rounded-full bg-[#ffcb31] text-[16px] font-medium text-black"
                type="button"
              >
                이메일 전송
              </button>
            </div>
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
