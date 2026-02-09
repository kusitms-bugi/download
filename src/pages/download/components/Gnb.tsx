import { useCallback, useEffect, useState } from 'react';

import { assets } from '../assets';
import { responsive } from '../responsive';
import { ModeToggle } from './ModeToggle';

export function Gnb() {
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
                  <button
                    aria-label="메뉴 닫기"
                    className="grid size-6 place-items-center"
                    onClick={closeDrawer}
                    type="button"
                  >
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

