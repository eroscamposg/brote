import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  return (
    <header className="flex w-full bg-white z-50 text-black p-4 shadow-sm">
      <div className="md:hidden w-full">
        <MobileHeader />
      </div>
      <div className="hidden md:block md:w-full">
        <DesktopHeader />
      </div>
    </header>
  );
}
