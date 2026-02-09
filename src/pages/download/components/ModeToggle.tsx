import { assets } from '../assets';

export function ModeToggle() {
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

