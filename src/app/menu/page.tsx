import type { Metadata } from "next";
import { MenuBrowser } from "@/src/components/features/menu/MenuBrowser";
import { getMenu } from "@/src/lib/menuApi";

export const metadata: Metadata = {
  title: "Menú",
  description: "Pokes y bebidas de Brote.",
};

export default async function MenuPage() {
  const { sections } = await getMenu();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-6 sm:px-6">
      <MenuBrowser groups={sections} showHeadings showNav />
    </div>
  );
}
