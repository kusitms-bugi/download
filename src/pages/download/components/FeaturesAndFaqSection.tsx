import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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
    <div className="flex min-h-[229px] flex-col gap-4 rounded-[20px] bg-white p-6">
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
  const { t } = useTranslation();

  const features = useMemo<Feature[]>(
    () => [
      {
        title: t("features.posture.title"),
        description: t("features.posture.desc"),
        icon: assets.features.iconSeat,
      },
      {
        title: t("features.widget.title"),
        description: t("features.widget.desc"),
        icon: assets.features.iconWidget,
      },
      {
        title: t("features.dashboard.title"),
        description: t("features.dashboard.desc"),
        icon: assets.features.iconDashboard,
      },
      {
        title: t("features.alert.title"),
        description: t("features.alert.desc"),
        icon: assets.features.iconAlert,
      },
    ],
    [t],
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
            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconSeat}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.posture.title")}
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.posture.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconWidget}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.widget.title")}
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.widget.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconDashboard}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.dashboard.title")}
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.dashboard.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-[44px] object-contain"
                src={assets.features.iconAlert}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.alert.title")}
                </div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.alert.desc")}
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
            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconSeat}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.posture.title")}
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.posture.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconWidget}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.widget.title")}
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.widget.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconDashboardMobile}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.dashboard.title")}
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.dashboard.desc")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img
                alt=""
                className="size-10 object-contain"
                src={assets.features.iconAlertMobile}
              />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">
                  {t("features.alert.title")}
                </div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  {t("features.alert.desc")}
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
