import Link from "next/link";
import MobileSidebar from "../MobileSidebar";

export default function MobileHeader() {
  return (
    <div className="flex justify-between">
      <Link href="/" className="text-2xl font-bold">
        Brote
      </Link>
      <MobileSidebar />
    </div>
  );
}
