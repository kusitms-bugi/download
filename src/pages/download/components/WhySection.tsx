import { assets } from '../assets';
import { responsive } from '../responsive';

export function WhySection() {
  return (
    <>
      <section className={['relative aspect-[2/1] w-full overflow-hidden', responsive.showOnlyDesktop].join(' ')}>
        <img alt="" className="absolute  inset-0 h-full w-full object-cover" src={assets.why.bg} />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto h-full max-w-[1200px] px-6">
          <div className="pt-[181px] pl-30">
            <h2 className="max-w-[560px] text-[38px] font-bold leading-[1.25] text-white sm:text-[50px]">
              <span className="block">왜 우리는 알면서도</span>
              <span className="block">계속 거북이가 되어갈까요?</span>
            </h2>
            <p className="mt-10 max-w-[560px] text-[16px] font-medium leading-[1.5] text-[#efeeed] sm:text-[18px]">
              병원에 갈 시간도, 비용도 부담되지만 방치할 수록 몸이 무너지는 걸 체감해요.
              <br />
              그럼에도 바쁜 현대 사회 속에서 오래 앉아 있는 생존형 PC 몰입러,
              <br />
              거부기린은 당신을 위한 서비스예요!
            </p>
          </div>
        </div>
      </section>

      <section className={['relative h-[409px] w-full overflow-hidden', responsive.showOnlyTablet].join(' ')}>
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.why.tabletBg} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto h-full max-w-[800px] px-10 pt-10">
          <h2 className="text-[32px] font-bold leading-[1.5] text-white">
            <span className="block">왜 우리는 알면서도</span>
            <span className="block">계속 거북이가 되어갈까요?</span>
          </h2>
          <p className="mt-5 w-[288px] text-[16px] font-medium leading-[1.5] text-[#efeeed]">
            병원에 갈 시간도, 비용도 부담되지만 방치할 수록 몸이 무너지는 걸 체감해요. 그럼에도 바쁜 현대 사회 속에서 오래 앉아 있는
            생존형 PC 몰입러, 거부기린은 당신을 위한 서비스예요!
          </p>
        </div>
      </section>

      <section className={['relative h-[201px] w-full overflow-hidden', responsive.showOnlyMobile].join(' ')}>
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.why.mobileBg} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto h-full max-w-[320px] px-4 pt-4">
          <h2 className="text-[18px] font-bold leading-[1.5] text-white">
            <span className="block">왜 우리는 알면서도</span>
            <span className="block">계속 거북이가 되어갈까요?</span>
          </h2>
          <p className="mt-[10px] w-[210px] text-[10px] font-medium leading-[1.5] text-[#efeeed]">
            병원에 갈 시간도, 비용도 부담되지만 방치할 수록 몸이 무너지는 걸 체감해요. 그럼에도 바쁜 현대 사회 속에서 오래 앉아 있는
            생존형 PC 몰입러, 거부기린은 당신을 위한 서비스예요!
          </p>
        </div>
      </section>
    </>
  );
}

