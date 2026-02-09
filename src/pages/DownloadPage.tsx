import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const assets = {
  gnb: {
    logoMark: '/assets/figma/gnb-logo-mark.png',
    logoType: '/assets/figma/gnb-logo-type.png',
    iconSun: '/assets/figma/gnb-icon-sun.svg',
    iconMoon: '/assets/figma/gnb-icon-moon.svg',
    iconMenuTablet: '/assets/figma/gnb-menu.svg',
    iconMenuMobile: '/assets/figma/gnb-menu-mobile.svg',
    iconClose: '/assets/figma/gnb-close.svg',
  },
  hero: {
    appLogo: '/assets/figma/hero-app-logo.png',
    iconApple: '/assets/figma/hero-icon-apple.svg',
    iconWindows: '/assets/figma/hero-icon-windows.svg',
    mock: '/assets/figma/hero-mock.png',
    tabletMock: '/assets/figma/hero-tablet-mock.png',
    mobileMock: '/assets/figma/hero-mobile-mock.png',
  },
  why: {
    bg: '/assets/figma/why-bg.jpg',
    tabletBg: '/assets/figma/why-bg-tablet.png',
    mobileBg: '/assets/figma/why-bg-mobile.png',
  },
  keypoints: {
    kp1: '/assets/figma/keypoint-1.png',
    kp2: '/assets/figma/keypoint-2.png',
    kp3: '/assets/figma/keypoint-3.png',
    kp4: '/assets/figma/keypoint-4.png',
    kp4Notif: '/assets/figma/keypoint-4-notif.png',
    kp5Min: '/assets/figma/keypoint-5-min.png',
    kp5Med: '/assets/figma/keypoint-5-med.png',
    tabletKp1: '/assets/figma/keypoint-t-1.png',
    tabletKp2: '/assets/figma/keypoint-t-2.png',
    tabletKp3: '/assets/figma/keypoint-t-3.png',
    tabletKp4: '/assets/figma/keypoint-t-4.png',
    tabletKp4Notif: '/assets/figma/keypoint-t-4-notif.png',
    tabletKp5Min: '/assets/figma/keypoint-t-5-min.png',
    tabletKp5Med: '/assets/figma/keypoint-t-5-med.png',
    mobileKp1: '/assets/figma/keypoint-m-1.png',
    mobileKp2: '/assets/figma/keypoint-m-2.png',
    mobileKp3: '/assets/figma/keypoint-m-3.png',
    mobileKp4: '/assets/figma/keypoint-m-4.png',
    mobileKp4Notif: '/assets/figma/keypoint-m-4-notif.png',
    mobileKp5Min: '/assets/figma/keypoint-m-5-min.png',
    mobileKp5Med: '/assets/figma/keypoint-m-5-med.png',
  },
  features: {
    iconSeat: '/assets/figma/feature-icon-seat.svg',
    iconWidget: '/assets/figma/feature-icon-widget.svg',
    iconDashboard: '/assets/figma/feature-icon-dashboard.png',
    iconAlert: '/assets/figma/feature-icon-alert.png',
    iconDashboardMobile: '/assets/figma/feature-icon-dashboard-mobile.svg',
    iconAlertMobile: '/assets/figma/feature-icon-alert-mobile.svg',
  },
  faq: {
    iconMinus: '/assets/figma/faq-minus.svg',
    iconMinusTablet: '/assets/figma/faq-minus-tablet.svg',
    iconPlusTablet: '/assets/figma/faq-plus.svg',
    divider: '/assets/figma/faq-divider.svg',
    iconPlusMobile: '/assets/figma/faq-plus-mobile.svg',
    iconMinusMobile: '/assets/figma/faq-minus-mobile.svg',
    dividerMobile: '/assets/figma/faq-divider-mobile.svg',
  },
  cta: {
    bg: '/assets/figma/cta-bg.png',
    tabletBg: '/assets/figma/cta-bg-tablet.png',
    mobileBg: '/assets/figma/cta-bg-mobile.png',
  },
  footer: {
    social: '/assets/figma/footer-social.png',
    socialMobile: '/assets/figma/footer-social-mobile.png',
  },
} as const;

const responsive = {
  showOnlyMobile: 'hidden [@media(max-width:799px)]:block',
  showOnlyTablet: 'hidden [@media(min-width:800px)_and_(max-width:1199px)]:block',
  showOnlyDesktop: 'hidden [@media(min-width:1200px)]:block',
  hideOnMobile: '[@media(max-width:799px)]:hidden',
} as const;

function ModeToggle() {
  return (
    <button
      aria-label="라이트 모드"
      className="relative h-[30px] w-[62px] rounded-full bg-[#f9f8f7] p-[3px]"
      type="button"
    >
      <span className="flex items-center gap-2">
        <span className="grid size-6 place-items-center rounded-full bg-[#ffcb31]">
          <img alt="" className="h-4 w-4" src={assets.gnb.iconSun} />
        </span>
        <span className="grid size-6 place-items-center rounded-full bg-[#f9f8f7]">
          <img alt="" className="h-4 w-4" src={assets.gnb.iconMoon} />
        </span>
      </span>
    </button>
  );
}

function Gnb() {
  const navItems = ['다운로드', '업데이트 소식', '요금제', '블로그'] as const;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setIsDrawerVisible(true);
    requestAnimationFrame(() => setIsDrawerOpen(true));
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    window.setTimeout(() => setIsDrawerVisible(false), 320);
  }, []);

  useEffect(() => {
    if (!isDrawerVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeDrawer, isDrawerVisible]);

  return (
    <>
      <header className={['sticky top-0 z-50 border-b border-[#efeeed] bg-white', responsive.showOnlyDesktop].join(' ')}>
        <div className="mx-auto flex h-[63px] max-w-[1200px] items-center justify-between px-6">
          <a className="flex items-center gap-2" href="#">
            <img alt="거부기린" className="size-6" src={assets.gnb.logoMark} />
            <img alt="" className="h-[15px] w-auto" src={assets.gnb.logoType} />
          </a>

          <nav className="hidden items-center gap-3 text-[15px] font-medium text-[#7e7e7b] md:flex">
            {navItems.map((label) => (
              <a className="rounded-full px-3 py-2 hover:bg-[#f9f8f7]" href="#" key={label}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <button
              className="rounded-full bg-[#ffcb31] px-3 py-1.5 text-[14px] font-medium text-black"
              type="button"
            >
              거부기린 실행
            </button>
          </div>
        </div>
      </header>

      <header className={['sticky top-0 z-50 border-b border-[#efeeed] bg-white', responsive.showOnlyTablet].join(' ')}>
        <div className="mx-auto flex h-[63px] max-w-[800px] items-center justify-between px-4">
          <a className="flex items-center gap-2" href="#">
            <img alt="거부기린" className="size-6" src={assets.gnb.logoMark} />
            <img alt="" className="h-[15px] w-auto" src={assets.gnb.logoType} />
          </a>
          <button
            aria-controls="navigation-drawer"
            aria-expanded={isDrawerOpen}
            aria-label="메뉴 열기"
            className="grid size-9 place-items-center"
            onClick={openDrawer}
            type="button"
          >
            <img alt="" className="h-[33px] w-6" src={assets.gnb.iconMenuTablet} />
          </button>
        </div>
      </header>

      <header className={['sticky top-0 z-50 border-b border-[#efeeed] bg-white', responsive.showOnlyMobile].join(' ')}>
        <div className="mx-auto flex h-[63px] max-w-[320px] items-center justify-between px-4">
          <a className="flex items-center gap-2" href="#">
            <img alt="거부기린" className="size-6" src={assets.gnb.logoMark} />
            <img alt="" className="h-[15px] w-auto" src={assets.gnb.logoType} />
          </a>
          <button
            aria-controls="navigation-drawer"
            aria-expanded={isDrawerOpen}
            aria-label="메뉴 열기"
            className="grid size-9 place-items-center"
            onClick={openDrawer}
            type="button"
          >
            <img alt="" className="h-[33px] w-6" src={assets.gnb.iconMenuMobile} />
          </button>
        </div>
      </header>

      {isDrawerVisible ? (
        <div className="fixed inset-0 z-[60]">
          <button
            aria-label="메뉴 닫기"
            className={[
              'absolute inset-0 bg-[rgba(0,0,0,0.4)] transition-opacity duration-200 ease-out',
              isDrawerOpen ? 'opacity-80' : 'opacity-0',
            ].join(' ')}
            onClick={closeDrawer}
            type="button"
          />

          <aside
            aria-modal="true"
            className={[
              'absolute inset-0 h-full w-screen bg-white pb-8 pl-4 pr-6 pt-4',
              'transition-transform duration-300 ease-out will-change-transform',
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full',
            ].join(' ')}
            id="navigation-drawer"
            role="dialog"
          >
            <div className="flex h-full flex-col items-start justify-between">
              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full items-center justify-between">
                  <a className="flex items-center gap-2" href="#">
                    <img alt="거부기린" className="size-6" src={assets.gnb.logoMark} />
                    <img alt="" className="h-[15px] w-auto" src={assets.gnb.logoType} />
                  </a>
                  <button aria-label="메뉴 닫기" className="grid size-6 place-items-center" onClick={closeDrawer} type="button">
                    <img alt="" className="size-6" src={assets.gnb.iconClose} />
                  </button>
                </div>

                <nav className="flex w-full flex-col gap-1">
                  {navItems.map((label) => (
                    <a
                      className="py-2 text-[16px] font-medium leading-[1.5] text-[#7e7e7b]"
                      href="#"
                      key={label}
                      onClick={closeDrawer}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pb-4">
                <ModeToggle />
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <>
      <section className={['bg-[#f9f8f7] pt-[72px]', responsive.showOnlyDesktop].join(' ')}>
        <div className="mx-auto flex max-w-[1016px] flex-col items-center px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <h1 className="text-[44px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#212121] sm:text-[58px] sm:leading-[1.6]">
              거부기린 다운로드
            </h1>
            <p className="text-[18px] font-semibold leading-[1.5] text-[#6a6966] sm:text-[20px]">
              <span className="block">실시간 거북목 측정과 피드백을 통해</span>
              <span className="block">자세 변화를 즉시 인지하고 교정할 수 있어요.</span>
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
            <a className="text-[14px] font-medium text-[#7e7e7b] underline" href="#">
              Intel 기반 macOS용 다운로드
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1320px] px-6 pb-[96px]">
          <img alt="거부기린 서비스 화면" className="w-full" src={assets.hero.mock} />
        </div>
      </section>

      <section className={['bg-white pt-[68px]', responsive.showOnlyTablet].join(' ')}>
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-[40px] px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[36px] font-extrabold leading-[1.5] tracking-[-0.02em] text-[#212121]">
                거부기린 다운로드
              </h1>
              <p className="text-[16px] font-medium leading-[1.5] text-[#6a6966]">
                <span className="block">실시간 거북목 측정과 피드백을 통해</span>
                <span className="block">자세 변화를 즉시 인지하고 교정할 수 있어요.</span>
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
              <button className="h-10 w-full rounded-full bg-[#ffcb31] text-[16px] font-medium text-black" type="button">
                이메일 전송
              </button>
            </div>
            <p className="mt-4 text-[10px] font-medium leading-[1.5] text-[#7e7e7b]">
              <span className="block">거부기린은 PC에서만 사용 가능해요.</span>
              <span className="block">이메일을 입력해주시면 링크와 함께 알림을 보내드려요.</span>
            </p>
          </div>
        </div>

        <div className="mt-[40px] bg-black">
          <div className="mx-auto max-w-[760px] px-4 pb-[24px] pt-[24px]">
            <img alt="거부기린 서비스 화면" className="w-full" src={assets.hero.tabletMock} />
          </div>
        </div>
      </section>

      <section className={['bg-white pt-[68px]', responsive.showOnlyMobile].join(' ')}>
        <div className="mx-auto flex max-w-[320px] flex-col items-center gap-[40px] px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <img alt="" className="size-20" src={assets.hero.appLogo} />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[24px] font-extrabold leading-[1.5] tracking-[-0.02em] text-[#212121]">
                거부기린 다운로드
              </h1>
              <p className="text-[14px] font-medium leading-[1.5] text-[#6a6966]">
                <span className="block">실시간 거북목 측정과 피드백을 통해</span>
                <span className="block">자세 변화를 즉시 인지하고 교정할 수 있어요.</span>
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
              <button className="h-10 w-full rounded-full bg-[#ffcb31] text-[16px] font-medium text-black" type="button">
                이메일 전송
              </button>
            </div>
            <p className="mt-4 text-[10px] font-medium leading-[1.5] text-[#7e7e7b]">
              <span className="block">거부기린은 PC에서만 사용 가능해요.</span>
              <span className="block">이메일을 입력해주시면 링크와 함께 알림을 보내드려요.</span>
            </p>
          </div>
        </div>

        <div className="mt-[40px] bg-black">
          <div className="mx-auto max-w-[360px] px-4 pb-[24px] pt-[24px]">
            <img alt="거부기린 서비스 화면" className="w-full" src={assets.hero.mobileMock} />
          </div>
        </div>
      </section>
    </>
  );
}

function WhySection() {
  return (
    <>
      <section className={['relative h-[736px] w-full overflow-hidden', responsive.showOnlyDesktop].join(' ')}>
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.why.bg} />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto h-full max-w-[1200px] px-6">
          <div className="pt-[120px]">
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
        'flex flex-col items-start gap-[40px] lg:flex-row lg:gap-[72px]',
        reverse ? 'lg:flex-row-reverse lg:justify-end' : '',
      ].join(' ')}
    >
      <div className="shrink-0">
        <img
          alt={imageAlt}
          className={['w-full max-w-[800px] rounded-[16px]', imageClassName ?? ''].join(' ')}
          src={imageSrc}
        />
      </div>

      <div className={['pt-0', alignRight ? 'lg:text-right lg:items-end' : '', 'flex flex-col gap-6'].join(' ')}>
        <div className={['flex flex-col gap-2', alignRight ? 'items-end' : 'items-start'].join(' ')}>
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

function KeypointsSection() {
  return (
    <>
      <section className={['bg-[#f9f8f7] py-[160px]', responsive.showOnlyDesktop].join(' ')}>
        <div className="mx-auto flex max-w-[1320px] flex-col gap-[160px] px-6">
          <Keypoint
            descLines={[
              '노트북이 있는 곳이라면 언제 어디서든 실행 가능해요',
              '온디바이스 구조로 프라이버시 걱정 없이 안전하게',
            ]}
            imageAlt="Keypoint 1"
            imageSrc={assets.keypoints.kp1}
            label="Keypoint 1"
            titleLines={['별도의 장비없이', '설치 한 번이면 끝!']}
          />

          <Keypoint
            alignRight
            descLines={['바른 자세를 유지할수록 캐릭터는 더 빨리 달리고', '더 빨리 레벨업해서 보상을 받을 수 있어요.']}
            imageAlt="Keypoint 2"
            imageClassName="max-w-[635px]"
            imageSrc={assets.keypoints.kp2}
            label="Keypoint 2"
            reverse
            titleLines={['방해되지 않는 귀여움,', '당신과 함께 쑥쑥 자라는 캐릭터']}
          />

          <Keypoint
            descLines={['매일의 작은 변화가 모이는 공간', '오늘의 리포트, 거북목 추이, 자세 개선 팁을', '한 눈에 파악 가능해요.']}
            imageAlt="Keypoint 3"
            imageSrc={assets.keypoints.kp3}
            label="Keypoint 3"
            titleLines={['나의 성장을 확인하는', '대시보드']}
          />

          <Keypoint
            alignRight
            descLines={['한 단계 높은 개입을 통해 위젯으로', '교정되지 않은 장시간 거북목 상태를 완화시켜줘요.']}
            extra={
              <div className="mt-10">
                <img alt="" className="w-[361px] max-w-full" src={assets.keypoints.kp4Notif} />
              </div>
            }
            imageAlt="Keypoint 4"
            imageSrc={assets.keypoints.kp4}
            label="Keypoint 4"
            reverse
            titleLines={['간편한 맞춤형 알림']}
          />

          <div className="flex flex-col items-start gap-[40px] lg:flex-row lg:gap-[72px]">
            <div className="flex shrink-0 flex-col items-center gap-6">
              <img alt="" className="w-[276px] max-w-full" src={assets.keypoints.kp5Min} />
              <img alt="Keypoint 5" className="w-[275px] max-w-full" src={assets.keypoints.kp5Med} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-[20px] font-medium text-[#ffbf00]">Keypoint 5</div>
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

      <section className={['bg-[#f9f8f7] py-[100px]', responsive.showOnlyTablet].join(' ')}>
        <div className="mx-auto flex max-w-[720px] flex-col gap-[120px] px-4">
          <div className="flex flex-col gap-9">
            <img alt="Keypoint 1" className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]" src={assets.keypoints.tabletKp1} />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">Keypoint 1</div>
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
            <img alt="Keypoint 2" className="w-full rounded-[16px]" src={assets.keypoints.tabletKp2} />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">Keypoint 2</div>
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
            <img alt="Keypoint 3" className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]" src={assets.keypoints.tabletKp3} />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">Keypoint 3</div>
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
            <img alt="Keypoint 4" className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]" src={assets.keypoints.tabletKp4} />
            <div className="flex flex-col gap-3">
              <div className="text-[16px] font-medium text-[#ffbf00]">Keypoint 4</div>
              <div className="text-[28px] font-bold leading-[1.5] text-[#212121]">간편한 맞춤형 알림</div>
              <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>한 단계 높은 개입을 통해 위젯으로</div>
                <div>교정되지 않은 장시간 거북목 상태를 완화시켜줘요.</div>
              </div>
              <div className="mt-4">
                <img alt="" className="w-full max-w-[360px]" src={assets.keypoints.tabletKp4Notif} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div className="relative h-[680px] w-full">
              <img alt="" className="absolute left-0 top-0 w-[361px] max-w-full" src={assets.keypoints.tabletKp5Min} />
              <img alt="Keypoint 5" className="absolute bottom-0 left-0 w-[353px] max-w-full" src={assets.keypoints.tabletKp5Med} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 5</div>
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

      <section className={['bg-[#f9f8f7] py-[100px]', responsive.showOnlyMobile].join(' ')}>
        <div className="mx-auto flex max-w-[320px] flex-col gap-[120px] px-4">
          <div className="flex flex-col gap-9">
            <img
              alt="Keypoint 1"
              className="w-full rounded-[16px] shadow-[0_0_15px_rgba(128,113,82,0.14)]"
              src={assets.keypoints.mobileKp1}
            />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 1</div>
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
            <img alt="Keypoint 2" className="w-full rounded-[16px]" src={assets.keypoints.mobileKp2} />
            <div className="flex flex-col gap-3">
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 2</div>
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
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 3</div>
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
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 4</div>
              <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">간편한 맞춤형 알림</div>
              <div className="text-[12px] font-medium leading-[1.5] text-[#7e7e7b]">
                <div>한 단계 높은 개입을 통해 위젯으로</div>
                <div>교정되지 않은 장시간 거북목 상태를 완화시켜줘요.</div>
              </div>
              <div className="mt-4">
                <img alt="" className="w-full max-w-[288px]" src={assets.keypoints.mobileKp4Notif} />
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
              <div className="text-[12px] font-medium text-[#ffbf00]">Keypoint 5</div>
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

type Feature = {
  title: string;
  description: string;
  icon: string;
  iconIsCircleBg?: boolean;
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex h-[229px] flex-col gap-4 rounded-[20px] bg-white p-6">
      {feature.iconIsCircleBg ? (
        <div className="grid size-12 place-items-center rounded-full bg-[#fff9e6]">
          <img alt="" className="size-8" src={feature.icon} />
        </div>
      ) : (
        <img alt="" className="size-12" src={feature.icon} />
      )}
      <div className="flex flex-col gap-3">
        <div className="text-[22px] font-bold leading-[1.5] text-[#2c2c2c]">{feature.title}</div>
        <div className="text-[16px] font-medium leading-[1.5] text-[#7e7e7b]">{feature.description}</div>
      </div>
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

function Faq() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: '웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?',
        answer:
          '거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.',
      },
      {
        question: '웹캠이 없으면 사용이 불가능한가요?',
        answer:
          '네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.',
      },
      {
        question: '노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?',
        answer:
          '거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.',
      },
      {
        question: '듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?',
        answer:
          '거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터 상단 정중앙에 카메라를 배치해 주세요.',
      },
      {
        question: '태블릿이나 스마트폰에서도 사용할 수 있나요?',
        answer:
          '현재 거부기린은 데스크탑 및 노트북 환경(Windows/Mac)에 최적화된 서비스예요. 긴 시간 고정된 자세로 PC 업무를 보는 직장인과 학생들의 거북목 예방을 최우선 목표로 하고 있으며 향후 모바일 및 태블릿 버전 확장 가능성을 검토할 예정이에요.',
      },
      {
        question: '잠시 자리를 비울 때는 어떻게 하는 게 좋나요?',
        answer:
          "화면 내 ‘카메라 끄기’ 버튼을 클릭해 측정을 일시 중단할 수 있어요. 화장실, 회의 등 자리를 비울 때 이 기능을 활용하면 불필요한 전력 소모를 줄이고, 사용하지 않는 동안의 데이터 기록도 방지할 수 있어요. 다시 업무를 시작할 때 버튼을 한 번 더 눌러주면 즉시 자세 분석이 다시 시작돼요.",
      },
      {
        question: '거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?',
        answer:
          '거부기린은 사용자가 업무 중 스스로 나쁜 자세를 인지하고 바른 습관을 가질 수 있도록 돕는 생산성 보조 도구예요. 만약 일상생활이 어려울 정도의 심한 통증이나 저림 증상이 지속된다면 이는 단순한 습관의 문제를 넘어선 상태일 수 있으므로 반드시 전문 의료기관(병원)을 방문하여 정확한 진단을 받으셔야 해요.',
      },
    ],
    [],
  );

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set(items.map((_, i) => i)));

  return (
    <div className="rounded-[20px] bg-white p-10">
      <h3 className="text-center text-[32px] font-bold leading-[1.5] text-[#212121]">자주 묻는 질문</h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndexes.has(index);
          return (
            <div key={item.question}>
              {index !== 0 ? <div className="mx-[20px] h-px bg-[#efeeed]" /> : null}
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
                  <img alt="" className="mt-1 size-6" src={assets.faq.iconMinus} />
                ) : (
                  <span aria-hidden="true" className="mt-1 grid size-6 place-items-center text-[#a8a7a4]">
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

function FeaturesAndFaqSection() {
  const features: Feature[] = [
    {
      title: '바른 자세 분석',
      description: '창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로 자세 분석이 가능해요.',
      icon: assets.features.iconSeat,
      iconIsCircleBg: true,
    },
    {
      title: '실시간 위젯 피드백',
      description:
        '화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을 제공하며 원하는 크기와 위치를 조정할 수 있어요.',
      icon: assets.features.iconWidget,
      iconIsCircleBg: true,
    },
    {
      title: '데이터로 보는 대시보드',
      description: '주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고 지속적인 변화를 느껴보세요.',
      icon: assets.features.iconDashboard,
    },
    {
      title: '스마트 알림',
      description: '자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게 포착해서 똑똑하게 알려드려요.',
      icon: assets.features.iconAlert,
    },
  ];

  return (
    <>
      <section className={['bg-[#f9f8f7] py-20', responsive.showOnlyDesktop].join(' ')}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>

          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      <section className={['bg-[#f9f8f7] py-[100px]', responsive.showOnlyTablet].join(' ')}>
        <div className="mx-auto max-w-[720px] px-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <div className="grid size-[44px] place-items-center rounded-full bg-[#fff9e6]">
                <img alt="" className="h-[29px] w-[29px]" src={assets.features.iconSeat} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">바른 자세 분석</div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로 자세 분석이 가능해요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <div className="grid size-[44px] place-items-center rounded-full bg-[#fff9e6]">
                <img alt="" className="h-[28px] w-[28px]" src={assets.features.iconWidget} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">실시간 위젯 피드백</div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을 제공하며 원하는 크기와 위치를 조정할 수 있어요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img alt="" className="size-[44px]" src={assets.features.iconDashboard} />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">데이터로 보는 대시보드</div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고 지속적인 변화를 느껴보세요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img alt="" className="size-[44px]" src={assets.features.iconAlert} />
              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-bold leading-[1.5] text-[#2c2c2c]">스마트 알림</div>
                <div className="text-[15px] font-medium leading-[1.5] text-[#7e7e7b]">
                  자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게 포착해서 똑똑하게 알려드려요.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
          <FaqTablet />
          </div>
        </div>
      </section>

      <section className={['bg-[#f9f8f7] py-[100px]', responsive.showOnlyMobile].join(' ')}>
        <div className="mx-auto max-w-[320px] px-4">
          <div className="flex flex-col gap-5">
            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <div className="grid size-10 place-items-center rounded-full bg-[#fff9e6]">
                <img alt="" className="h-[29px] w-[29px]" src={assets.features.iconSeat} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">바른 자세 분석</div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  창 전환이나 작업 방해 없이 어디서든 웹캠을 통해 실시간으로 자세 분석이 가능해요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <div className="grid size-10 place-items-center rounded-full bg-[#fff9e6]">
                <img alt="" className="h-[25px] w-[25px]" src={assets.features.iconWidget} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">실시간 위젯 피드백</div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  화면 위 작은 위젯의 기린과 거북이가 실시간으로 자세 피드백을 제공하며 원하는 크기와 위치를 조정할 수 있어요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img alt="" className="size-10" src={assets.features.iconDashboardMobile} />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">데이터로 보는 대시보드</div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  주·월간 단위 개인화 통계와 패턴 분석을 통해 자발적이고 지속적인 변화를 느껴보세요.
                </div>
              </div>
            </div>

            <div className="flex h-[200px] flex-col gap-4 rounded-[20px] bg-white p-6">
              <img alt="" className="size-10" src={assets.features.iconAlertMobile} />
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold leading-[1.5] text-[#2c2c2c]">스마트 알림</div>
                <div className="text-[14px] font-medium leading-[1.5] text-[#7e7e7b]">
                  자세가 심하게 나빠지거나 스트레칭이 필요한 순간을 정확하게 포착해서 똑똑하게 알려드려요.
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

function Cta() {
  return (
    <>
      <section
        className={['relative flex items-center justify-center py-[160px] sm:py-[200px]', responsive.showOnlyDesktop].join(' ')}
      >
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.cta.bg} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.8),rgba(255,255,255,0)_60%)]" />

        <div className="relative flex flex-col items-center gap-[60px] px-6 text-center">
          <div className="flex flex-col items-center gap-[10px]">
            <div className="text-[32px] font-bold leading-[1.2] text-[#212121] sm:text-[40px] sm:leading-[1.6]">
              세상 모든 거북목들이 기린이 될 때까지
            </div>
            <div className="text-[18px] font-semibold leading-[1.6] text-[#6a6966] sm:text-[20px]">
              거부기린이 궁금하다면?
            </div>
          </div>

          <button className="rounded-full bg-black px-7 py-4 text-[18px] font-medium text-white sm:text-[20px]" type="button">
            다운로드 없이 체험해보기
          </button>
        </div>
      </section>

      <section className={['relative grid h-[360px] place-items-center', responsive.showOnlyTablet].join(' ')}>
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.cta.tabletBg} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.95),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />

        <div className="relative flex w-full flex-col items-center gap-[30px] px-4 text-center">
          <div className="flex flex-col items-center gap-[10px]">
            <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
              <div>세상 모든 거북목들이</div>
              <div>기린이 될 때까지</div>
            </div>
            <div className="text-[14px] font-medium leading-[1.5] text-[#6a6966]">거부기린이 궁금하다면?</div>
          </div>
          <button className="rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white" type="button">
            다운로드 없이 체험해보기
          </button>
        </div>
      </section>

      <section className={['relative grid h-[297px] place-items-center', responsive.showOnlyMobile].join(' ')}>
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={assets.cta.mobileBg} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.95),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />

        <div className="relative flex w-full flex-col items-center px-4 text-center">
          <div className="text-[22px] font-bold leading-[1.5] text-[#212121]">
            <div>세상 모든 거북목들이</div>
            <div>기린이 될 때까지</div>
          </div>
          <div className="mt-[10px] text-[14px] font-medium leading-[1.5] text-[#6a6966]">거부기린이 궁금하다면?</div>
        </div>
      </section>
    </>
  );
}

function Footer() {
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
              <div className="mt-6">
                <img alt="" className="h-6 w-auto" src={assets.footer.social} />
              </div>
            </div>

            <div className="flex items-center gap-[15px] text-[14px] font-medium text-[#a8a7a4]">
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
            <div className="mt-6">
              <img alt="" className="h-5 w-auto" src={assets.footer.socialMobile} />
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

function FaqTablet() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: '웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?',
        answer:
          '거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.',
      },
      {
        question: '웹캠이 없으면 사용이 불가능한가요?',
        answer:
          '네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.',
      },
      {
        question: '노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?',
        answer:
          '거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.',
      },
      {
        question: '듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?',
        answer:
          '거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터를 카메라 정면에 배치해 주세요.',
      },
      {
        question: '태블릿이나 스마트폰에서도 사용할 수 있나요?',
        answer: '현재 거부기린은 PC에서만 사용 가능해요. 추후 모바일 지원을 고려 중이에요.',
      },
      {
        question: '잠시 자리를 비울 때는 어떻게 하는 게 좋나요?',
        answer:
          '잠시 자리를 비울 때는 거부기린을 일시 정지하거나 웹캠을 가려주세요. 장시간 자리를 비우는 경우에는 앱을 종료해 두는 것을 추천해요.',
      },
      {
        question: '거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?',
        answer:
          '통증이 지속되거나 증상이 악화된다면 전문의 상담을 권장해요. 거부기린은 교정 습관을 돕는 서비스이며, 의학적 진단을 대체하지 않아요.',
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(2);

  return (
    <div className="rounded-[20px] bg-white px-5 py-10">
      <h3 className="text-center text-[28px] font-bold leading-[1.5] text-[#212121]">자주 묻는 질문</h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              {index !== 0 ? <img alt="" className="mx-0 h-px w-full" src={assets.faq.divider} /> : null}
              <button
                className="flex w-full items-start justify-between gap-4 bg-white px-5 py-3 text-left"
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                type="button"
              >
                <div className="flex flex-1 items-start gap-2 text-[18px] font-medium leading-[1.5] text-[#3c3b3a]">
                  <span className="shrink-0">Q</span>
                  <span className="max-w-[494px]">{item.question}</span>
                </div>
                <img
                  alt=""
                  className="mt-1 size-6"
                  src={isOpen ? assets.faq.iconMinusTablet : assets.faq.iconPlusTablet}
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-3">
                  <div className="pl-5 pt-3 text-[16px] font-medium leading-[1.5] text-[#a8a7a4]">{item.answer}</div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FaqMobile() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        question: '웹캠을 사용하는데 보안이나 사생활 침해 걱정은 없나요?',
        answer:
          '거부기린은 사용자의 프라이버시 보호를 최우선으로 생각해요. 모든 영상 분석은 사용자의 PC 내에서만 이루어지는 100% 온디바이스(On-device) 처리 방식을 고수해요. 촬영된 영상은 외부 서버로 절대 전송되지 않으며 분석 즉시 폐기되므로 안심하고 사용하셔도 돼요.',
      },
      {
        question: '웹캠이 없으면 사용이 불가능한가요?',
        answer:
          '네, 거부기린은 웹캠을 통해 사용자의 실시간 자세를 3D로 분석하는 서비스이므로 카메라 장치가 필수적이에요. 만약 PC에 연결된 카메라가 없다면 아쉽지만 현재는 이용이 어려워요.',
      },
      {
        question: '노트북이나 데스크탑 사양에 상관없이 잘 작동하나요?',
        answer:
          '거부기린은 낮은 리소스로도 구동되도록 최적화되어 있어 일반적인 사무용 노트북이나 데스크탑 환경에서 무리 없이 실행돼요. 표준 웹캠만 있다면 별도의 장비 없이도 바로 3D 자세 분석 기능을 이용하실 수 있어요.',
      },
      {
        question: '듀얼 모니터를 사용 중인데, 어느 쪽을 봐도 괜찮나요?',
        answer:
          '거부기린은 정면 웹캠을 기준으로 사용자의 자세를 분석하도록 설계되었어요. 따라서 가장 정확한 측정을 위해 웹캠을 정면에 두는 것을 권장합니다. 만약 모니터를 측면으로 보고 있다면 자세가 흐트러진 것으로 인식할 수 있으니, 주 모니터를 카메라 정면에 배치해 주세요.',
      },
      {
        question: '태블릿이나 스마트폰에서도 사용할 수 있나요?',
        answer: '현재 거부기린은 PC에서만 사용 가능해요. 추후 모바일 지원을 고려 중이에요.',
      },
      {
        question: '잠시 자리를 비울 때는 어떻게 하는 게 좋나요?',
        answer:
          '잠시 자리를 비울 때는 거부기린을 일시 정지하거나 웹캠을 가려주세요. 장시간 자리를 비우는 경우에는 앱을 종료해 두는 것을 추천해요.',
      },
      {
        question: '거부기린을 써도 자세가 좋아지지 않거나 통증이 계속되면 어떡하죠?',
        answer:
          '통증이 지속되거나 증상이 악화된다면 전문의 상담을 권장해요. 거부기린은 교정 습관을 돕는 서비스이며, 의학적 진단을 대체하지 않아요.',
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(2);

  return (
    <div className="rounded-[20px] bg-white py-5">
      <h3 className="text-center text-[24px] font-bold leading-[1.5] text-[#212121]">자주 묻는 질문</h3>

      <div className="mt-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              {index !== 0 ? <img alt="" className="h-px w-full" src={assets.faq.dividerMobile} /> : null}
              <button
                className="flex w-full items-start justify-between gap-3 bg-white px-5 py-3 text-left"
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                type="button"
              >
                <div className="flex flex-1 items-start gap-2 text-[16px] font-medium leading-[1.5] text-[#3c3b3a]">
                  <span className="shrink-0">Q</span>
                  <span className="break-words">{item.question}</span>
                </div>
                <img
                  alt=""
                  className="mt-0.5 size-6 shrink-0"
                  src={isOpen ? assets.faq.iconMinusMobile : assets.faq.iconPlusMobile}
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-3">
                  <div className="pl-5 pt-3 text-[14px] font-medium leading-[1.5] text-[#a8a7a4]">{item.answer}</div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f7] text-[#212121]">
      <Gnb />
      <main>
        <Hero />
        <WhySection />
        <KeypointsSection />
        <FeaturesAndFaqSection />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
