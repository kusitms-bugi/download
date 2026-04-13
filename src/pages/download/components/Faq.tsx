import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { assets } from "../assets";
import { trackFaqInteraction } from "../../../utils/analytics";

type FaqItem = {
  question: string;
  answer: string;
};

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"] as const;

function useFaqItems() {
  const { t } = useTranslation();
  return useMemo<FaqItem[]>(
    () =>
      faqKeys.map((key) => ({
        question: t(`faq.${key}.question`),
        answer: t(`faq.${key}.answer`),
      })),
    [t],
  );
}

export function FaqDesktop() {
  const { t } = useTranslation();
  const items = useFaqItems();

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set());

  const handleFaqToggle = useCallback((index: number) => {
    const isOpen = openIndexes.has(index);
    trackFaqInteraction(index, !isOpen);
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, [openIndexes]);

  return (
    <div className="rounded-[20px] bg-white p-10">
      <h3 className="text-center text-[32px] font-bold leading-[1.5] text-[#212121]">
        {t("faq.title")}
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndexes.has(index);
          return (
            <div key={index}>
              {index !== 0 ? (
                <div className="mx-[20px] h-px bg-[#efeeed]" />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-6 bg-white px-5 py-3 text-left"
                onClick={() => handleFaqToggle(index)}
                type="button"
              >
                <div className="flex flex-1 items-start gap-2 text-[18px] font-medium leading-[1.5] text-[#3c3b3a]">
                  <span className="shrink-0">Q</span>
                  <span className="max-w-[720px]">{item.question}</span>
                </div>
                {isOpen ? (
                  <img
                    alt=""
                    className="mt-1 size-6"
                    src={assets.faq.iconMinus}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-6 place-items-center text-[#a8a7a4]"
                  >
                    +
                  </span>
                )}
              </button>
              {isOpen ? (
                <div className="px-5 pb-3">
                  <div className="pl-5 pt-3 text-[16px] font-medium leading-[1.5] text-[#a8a7a4]">
                    {item.answer}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FaqTablet() {
  const { t } = useTranslation();
  const items = useFaqItems();

  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleFaqToggle = useCallback((index: number) => {
    const isOpen = openIndex === index;
    trackFaqInteraction(index, !isOpen);
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, [openIndex]);

  return (
    <div className="rounded-[20px] bg-white px-5 py-10">
      <h3 className="text-center text-[28px] font-bold leading-[1.5] text-[#212121]">
        {t("faq.title")}
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              {index !== 0 ? (
                <img
                  alt=""
                  className="mx-0 h-px w-full"
                  src={assets.faq.divider}
                />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-4 bg-white px-5 py-3 text-left"
                onClick={() => handleFaqToggle(index)}
                type="button"
              >
                <div className="flex flex-1 items-start gap-2 text-[18px] font-medium leading-[1.5] text-[#3c3b3a]">
                  <span className="shrink-0">Q</span>
                  <span className="max-w-[494px]">{item.question}</span>
                </div>
                <img
                  alt=""
                  className="mt-1 size-6"
                  src={
                    isOpen
                      ? assets.faq.iconMinusTablet
                      : assets.faq.iconPlusTablet
                  }
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-3">
                  <div className="pl-5 pt-3 text-[16px] font-medium leading-[1.5] text-[#a8a7a4]">
                    {item.answer}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FaqMobile() {
  const { t } = useTranslation();
  const items = useFaqItems();

  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleFaqToggle = useCallback((index: number) => {
    const isOpen = openIndex === index;
    trackFaqInteraction(index, !isOpen);
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, [openIndex]);

  return (
    <div className="rounded-[20px] bg-white py-5">
      <h3 className="text-center text-[24px] font-bold leading-[1.5] text-[#212121]">
        {t("faq.title")}
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              {index !== 0 ? (
                <img
                  alt=""
                  className="h-px w-full"
                  src={assets.faq.dividerMobile}
                />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-3 bg-white px-5 py-3 text-left"
                onClick={() => handleFaqToggle(index)}
                type="button"
              >
                <div className="flex flex-1 items-start gap-2 text-[16px] font-medium leading-[1.5] text-[#3c3b3a]">
                  <span className="shrink-0">Q</span>
                  <span className="break-words">{item.question}</span>
                </div>
                <img
                  alt=""
                  className="mt-0.5 size-6 shrink-0"
                  src={
                    isOpen
                      ? assets.faq.iconMinusMobile
                      : assets.faq.iconPlusMobile
                  }
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-3">
                  <div className="pl-5 pt-3 text-[14px] font-medium leading-[1.5] text-[#a8a7a4]">
                    {item.answer}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
