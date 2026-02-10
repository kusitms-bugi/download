import { assets } from '../assets';
import { responsive } from '../responsive';
import Instagram from '../../../assets/Instagram_Icon.png';
import LinkedIn from '../../../assets/Linkedin_Icon.png';
import X from '../../../assets/Social_Icon.png';
import Thread from '../../../assets/Thread_Icon.png';

export function Footer() {
  return (
    <>
      <footer className={['border-t border-[#efeeed] bg-white px-6 py-[60px]', responsive.hideOnMobile].join(' ')}>
        <div className="mx-auto flex max-w-[960px] flex-col gap-[45px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="text-[24px] font-bold leading-[1.5] text-[#181817]">거부기린</div>
              <div className="mt-2 text-[16px] font-medium leading-[1.5] text-[#a8a7a4]">
                <div>대표: 김윤하</div>
                <div>사업자 번호: 000-00-00000</div>
                <div>문의 메일: geoboogirin@gmail.com</div>
              </div>
              <div className="mt-6 flex gap-6">
                <img alt="" className="h-5 w-auto" src={Instagram} />
                <img alt="" className="h-5 w-auto" src={LinkedIn} />
                <img alt="" className="h-5 w-auto" src={X} />
                <img alt="" className="h-5 w-auto" src={Thread} />
            </div>
            </div>

            <div className="flex  gap-[15px] text-[14px] font-medium text-[#a8a7a4]">
              <a href="#">운영정책</a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="#">개인정보 처리방침</a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="#">서비스 이용약관</a>
            </div>
          </div>

          <div className="border-t border-[#efeeed] pt-6 text-[10px] font-medium leading-[1.5] text-[#a8a7a4]">
            ⓒ 2026 Geoboogirin. All rights reserved.
          </div>
        </div>
      </footer>

      <footer className={['border-t border-[#efeeed] bg-white px-6', responsive.showOnlyMobile].join(' ')}>
        <div className="mx-auto flex max-w-[320px] flex-col gap-[60px]">
          <div className="border-t border-black/10 pt-[60px]">
            <div className="text-[20px] font-bold leading-[1.5] text-[#181817]">거부기린</div>
            <div className="mt-2 text-[12px] font-medium leading-[1.5] text-[#a8a7a4]">
              <div>대표: 김윤하</div>
              <div>사업자 번호: 000-00-00000</div>
              <div>문의 메일: geoboogirin@gmail.com</div>
            </div>
            <div className="mt-6 flex gap-6">
              <img alt="" className="h-5 w-auto" src={Instagram} />
              <img alt="" className="h-5 w-auto" src={LinkedIn} />
              <img alt="" className="h-5 w-auto" src={X} />
              <img alt="" className="h-5 w-auto" src={Thread} />
            </div>

            <div className="mt-[64px] flex items-center justify-between text-[14px] font-medium text-[#a8a7a4]">
              <a href="#">운영정책</a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="#">개인정보 처리방침</a>
              <div className="h-4 w-px bg-[#e3e1df]" />
              <a href="#">서비스 이용약관</a>
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

