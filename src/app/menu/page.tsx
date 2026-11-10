import type { Metadata } from "next";
import { MenuBrowser } from "@/src/components/features/menu/MenuBrowser";
import { menuSections } from "@/src/data/menu";

export const metadata: Metadata = {
  title: "Menú",
  description: "Pokes y bebidas de Brote.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-6 sm:px-6">
      <MenuBrowser groups={menuSections} showHeadings showNav />
    </div>
  );
}
