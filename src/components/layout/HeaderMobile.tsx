import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { CartButton } from "@/src/components/features/cart/CartButton";

export default function HeaderMobile() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <Image
          src={"/brotelogonobg.png"}
          alt="Brote logo"
          width={120}
          height={40}
          className="h-auto"
        />
      </Link>
      <div className="flex items-center gap-3">
        <CartButton />
        <Sidebar />
      </div>
    </div>
  );
}
