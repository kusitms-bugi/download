import { useMemo, useState } from "react";

import { assets } from "../assets";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqDesktop() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: "웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?",
        answer:
          "거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.",
      },
      {
        question: "웹캠이 없으면 사용이 불가능한가요?",
        answer:
          "네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.",
      },
      {
        question: "노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?",
        answer:
          "거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.",
      },
      {
        question: "듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?",
        answer:
          "거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터 상단 정중앙에 카메라를 배치해 주세요.",
      },
      {
        question: "태블릿이나 스마트폰에서도 사용할 수 있나요?",
        answer:
          "현재 거부기린은 데스크탑 및 노트북 환경(Windows/Mac)에 최적화된 서비스예요. 긴 시간 고정된 자세로 PC 업무를 보는 직장인과 학생들의 거북목 예방을 최우선 목표로 하고 있으며 향후 모바일 및 태블릿 버전 확장 가능성을 검토할 예정이에요.",
      },
      {
        question: "잠시 자리를 비울 때는 어떻게 하는 게 좋나요?",
        answer:
          "화면 내 ‘카메라 끄기’ 버튼을 클릭해 측정을 일시 중단할 수 있어요. 화장실, 회의 등 자리를 비울 때 이 기능을 활용하면 불필요한 전력 소모를 줄이고, 사용하지 않는 동안의 데이터 기록도 방지할 수 있어요. 다시 업무를 시작할 때 버튼을 한 번 더 눌러주면 즉시 자세 분석이 다시 시작돼요.",
      },
      {
        question:
          "거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?",
        answer:
          "거부기린은 자세 교정 습관을 돕는 서비스이지만 의학적 진단과 치료를 대체할 수는 없어요. 만약 통증이 심하거나 지속된다면 전문 의료진(정형외과, 재활의학과 등)과 상담해 주세요.",
      },
    ],
    [],
  );

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set(items.map((_, i) => i)),
  );

  return (
    <div className="rounded-[20px] bg-white p-10">
      <h3 className="text-center text-[32px] font-bold leading-[1.5] text-[#212121]">
        자주 묻는 질문
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndexes.has(index);
          return (
            <div key={item.question}>
              {index !== 0 ? (
                <div className="mx-[20px] h-px bg-[#efeeed]" />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-6 bg-white px-5 py-3 text-left"
                onClick={() => {
                  setOpenIndexes((prev) => {
                    const next = new Set(prev);
                    if (next.has(index)) next.delete(index);
                    else next.add(index);
                    return next;
                  });
                }}
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
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: "웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?",
        answer:
          "거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.",
      },
      {
        question: "웹캠이 없으면 사용이 불가능한가요?",
        answer:
          "네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.",
      },
      {
        question: "노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?",
        answer:
          "거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.",
      },
      {
        question: "듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?",
        answer:
          "거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터를 카메라 정면에 배치해 주세요.",
      },
      {
        question: "태블릿이나 스마트폰에서도 사용할 수 있나요?",
        answer:
          "현재 거부기린은 PC에서만 사용 가능해요. 추후 모바일 지원을 고려 중이에요.",
      },
      {
        question: "잠시 자리를 비울 때는 어떻게 하는 게 좋나요?",
        answer:
          "잠시 자리를 비울 때는 거부기린을 일시 정지하거나 웹캠을 가려주세요. 장시간 자리를 비우는 경우에는 앱을 종료해 두는 것을 추천해요.",
      },
      {
        question:
          "거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?",
        answer:
          "통증이 지속되거나 증상이 악화된다면 전문의 상담을 권장해요. 거부기린은 교정 습관을 돕는 서비스이며, 의학적 진단을 대체하지 않아요.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(2);

  return (
    <div className="rounded-[20px] bg-white px-5 py-10">
      <h3 className="text-center text-[28px] font-bold leading-[1.5] text-[#212121]">
        자주 묻는 질문
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              {index !== 0 ? (
                <img
                  alt=""
                  className="mx-0 h-px w-full"
                  src={assets.faq.divider}
                />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-4 bg-white px-5 py-3 text-left"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
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
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: "웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?",
        answer:
          "거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.",
      },
      {
        question: "웹캠이 없으면 사용이 불가능한가요?",
        answer:
          "네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.",
      },
      {
        question: "노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?",
        answer:
          "거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.",
      },
      {
        question: "듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?",
        answer:
          "거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터를 카메라 정면에 배치해 주세요.",
      },
      {
        question: "태블릿이나 스마트폰에서도 사용할 수 있나요?",
        answer:
          "현재 거부기린은 PC에서만 사용 가능해요. 추후 모바일 지원을 고려 중이에요.",
      },
      {
        question: "잠시 자리를 비울 때는 어떻게 하는 게 좋나요?",
        answer:
          "잠시 자리를 비울 때는 거부기린을 일시 정지하거나 웹캠을 가려주세요. 장시간 자리를 비우는 경우에는 앱을 종료해 두는 것을 추천해요.",
      },
      {
        question:
          "거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?",
        answer:
          "통증이 지속되거나 증상이 악화된다면 전문의 상담을 권장해요. 거부기린은 교정 습관을 돕는 서비스이며, 의학적 진단을 대체하지 않아요.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(2);

  return (
    <div className="rounded-[20px] bg-white py-5">
      <h3 className="text-center text-[24px] font-bold leading-[1.5] text-[#212121]">
        자주 묻는 질문
      </h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              {index !== 0 ? (
                <img
                  alt=""
                  className="h-px w-full"
                  src={assets.faq.dividerMobile}
                />
              ) : null}
              <button
                className="flex w-full items-start justify-between gap-3 bg-white px-5 py-3 text-left"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
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
