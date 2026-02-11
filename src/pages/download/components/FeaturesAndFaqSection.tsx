import { useMemo } from "react";

import { assets } from "../assets";
import { responsive } from "../responsive";
import { FaqDesktop, FaqMobile, FaqTablet } from "./Faq";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex h-[229px] flex-col gap-4 rounded-[20px] bg-white p-6">
      <img alt="" className="size-12 object-contain" src={feature.icon} />
      <div className="flex flex-col gap-3">
        <div className="text-[22px] font-bold leading-[1.5] text-[#2c2c2c]">
          {feature.title}
        </div>
        <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
          {feature.description}
        </div>
      </div>
    </div>
  );
}

export function FeaturesAndFaqSection() {
  const features = useMemo<Feature[]>(
    () => [
      {
        title: "바른 자세 분석",
        description:
          "창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로 자세 분석이 가능해요.",
        icon: assets.features.iconSeat,
      },
      {
        title: "실시간 위젯 피드백",
        description:
          "화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을 제공하며 원하는 크기와 위치를 조정할 수 있어요.",
        icon: assets.features.iconWidget,
      },
      {
        title: "데이터로 보는 대시보드",
        description:
          "주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고 지속적인 변화를 느껴보세요.",
        icon: assets.features.iconDashboard,
      },
      {
        title: "스마트 알림",
        description:
          "자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게 포착해서 똑똑하게 알려드려요.",
        icon: assets.features.iconAlert,
      },
    ],
    [],
  );

  return (
    <>
      <section
        className={["bg-[#f9f8f7] py-20", responsive.showOnlyDesktop].join(" ")}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>

          <div className="mt-10">
            <FaqDesktop />
          </div>
        </div>
      </section>

      <section
        className={["bg-[#f9f8f7] py-[40px]", responsive.showOnlyTablet].join(
          " ",
        )}
      >
        <div className="mx-auto max-w-[720px] px-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconSeat}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  바른 자세 분석
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로
                  자세 분석이 가능해요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconWidget}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  실시간 위젯 피드백
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을
                  제공하며 원하는 크기와 위치를 조정할 수 있어요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconDashboard}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  데이터로 보는 대시보드
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고
                  지속적인 변화를 느껴보세요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconAlert}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  스마트 알림
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게
                  포착해서 똑똑하게 알려드려요.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <FaqTablet />
          </div>
        </div>
      </section>

      <section
        className={["bg-[#f9f8f7] py-[40px]", responsive.showOnlyMobile].join(
          " ",
        )}
      >
        <div className="mx-4 min-w-[320px]">
          <div className="flex flex-col gap-5">
            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconSeat}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  바른 자세 분석
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로
                  자세 분석이 가능해요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconWidget}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  실시간 위젯 피드백
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을
                  제공하며 원하는 크기와 위치를 조정할 수 있어요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconDashboardMobile}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  데이터로 보는 대시보드
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고
                  지속적인 변화를 느껴보세요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconAlertMobile}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  스마트 알림
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게
                  포착해서 똑똑하게 알려드려요.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <FaqMobile />
          </div>
        </div>
      </section>
    </>
  );
}
