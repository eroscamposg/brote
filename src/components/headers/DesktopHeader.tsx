import { HiShoppingCart } from "react-icons/hi2";
import { Button } from "../Button";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between">
      <button className="text-2xl font-bold">Brote</button>
      <div className="flex align-middle justify-center gap-6">
        <Button variant={"empty"}>Home</Button>
        <Button variant={"empty"}>About</Button>
        <Button variant={"empty"}>Menu</Button>
        <Button variant={"empty"}>Blog</Button>
        <Button variant={"empty"}>Contact</Button>
        <HiShoppingCart className="flex self-center" />
      </div>
    </div>
  );
}
