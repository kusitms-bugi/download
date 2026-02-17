import { responsive } from "../responsive";
import Instagram from "../../../assets/Instagram_Icon.png";

export function Footer() {
  return (
    <>
      <footer
        className={[
          "border-t border-[#efeeed] bg-white px-6 py-[60px]",
          responsive.hideOnMobile,
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-[960px] flex-col gap-[45px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="text-[24px] font-bold leading-[1.5] text-[#181817]">
                거부기린
              </div>
              <div className="mt-2 text-[16px] font-medium leading-[1.5] text-[#a8a7a4]">
                <div>대표: 김윤하</div>
                <div>문의 메일: gbgr32@gmail.com</div>
              </div>
              <div className="mt-6 flex gap-6">
                <a
                  href="https://www.instagram.com/gbgr_official/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="거부기린 인스타그램" className="h-5 w-auto" src={Instagram} />
                </a>
              </div>
            </div>

            <div className="flex  gap-[15px] text-[14px] font-medium text-[#a8a7a4]">
              <a href="https://adhesive-wrench-b12.notion.site/3097d0b568e280bc900ccdea3f5e4bf0">
                개인정보 처리방침
              </a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="https://adhesive-wrench-b12.notion.site/3097d0b568e280189851cd444d1f1846?pvs=73">
                서비스 이용약관
              </a>
            </div>
          </div>

          <div className="border-t border-[#efeeed] pt-6 text-[10px] font-medium leading-[1.5] text-[#a8a7a4]">
            ⓒ 2026 Geoboogirin. All rights reserved.
          </div>
        </div>
      </footer>

      <footer
        className={[
          "border-t border-[#efeeed] bg-white px-6",
          responsive.showOnlyMobile,
        ].join(" ")}
      >
        <div className="mx-auto flex min-w-[320px] flex-col gap-[60px]">
          <div className="border-t border-black/10 pt-[60px]">
            <div className="text-[20px] font-bold leading-[1.5] text-[#181817]">
              거부기린
            </div>
            <div className="mt-2 text-[12px] font-medium leading-[1.5] text-[#a8a7a4]">
              <div>대표: 김윤하</div>
              <div>문의 메일: gbgr32@gmail.com</div>
            </div>
            <div className="mt-6 flex gap-6">
              <a
                href="https://www.instagram.com/gbgr_official/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="거부기린 인스타그램" className="h-5 w-auto" src={Instagram} />
              </a>
            </div>

            <div className="mt-[64px] flex items-center justify-between text-[14px] font-medium text-[#a8a7a4]">
              <a href="https://adhesive-wrench-b12.notion.site/3097d0b568e280bc900ccdea3f5e4bf0">
                개인정보 처리방침
              </a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="https://adhesive-wrench-b12.notion.site/3097d0b568e280189851cd444d1f1846?pvs=73">
                서비스 이용약관
              </a>
            </div>
          </div>

          <div className="border-t border-[#efeeed] py-6 text-[10px] font-medium leading-[1.5] text-[#a8a7a4]">
            ⓒ 2026 Geoboogirin. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
