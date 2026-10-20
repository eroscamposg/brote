import Link from "next/link";
import MobileSidebar from "../MobileSidebar";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <Image
          src={"/brotelogonobg.png"}
          alt="Brote logo"
          width={120}
          height={40}
        />
      </Link>
      <MobileSidebar />
    </div>
  );
}
