import HeaderMobile from "@/src/components/layout/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header className="flex w-full bg-white z-50 text-black p-4 shadow-sm">
      <div className="md:hidden w-full">
        <HeaderMobile />
      </div>
      <div className="hidden md:block md:w-full">
        <HeaderDesktop />
      </div>
    </header>
  );
}
