import { HiShoppingCart } from "react-icons/hi2";
import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";

export default function DesktopHeader() {
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
      <div className="flex self-center justify-center gap-6">
        <Button variant={"empty"} href="/">
          Home
        </Button>
        <Button variant={"empty"}>About</Button>
        <Button variant={"empty"} href="/menu">
          Menu
        </Button>
        <Button variant={"empty"}>Blog</Button>
        <Button variant={"empty"}>Contact</Button>
        <HiShoppingCart className="flex self-center" />
      </div>
    </div>
  );
}
