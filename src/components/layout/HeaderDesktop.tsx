import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { CartButton } from "@/src/components/features/cart/CartButton";

export default function HeaderDesktop() {
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
      <div className="flex self-center justify-center gap-6">
        <Button variant={"empty"} href="/">
          Inicio
        </Button>
        <Button variant={"empty"} href="/nosotros">
          Nosotros
        </Button>
        <Button variant={"empty"} href="/menu">
          Menú
        </Button>
        <Button variant={"empty"} href="/contacto">
          Contacto
        </Button>
        <CartButton />
      </div>
    </div>
  );
}
