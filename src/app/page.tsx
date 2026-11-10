import Link from "next/link";
import { Button } from "../components/ui/Button";
import MenuHero, { HeroSlide } from "@/src/components/features/menu/MenuHero";
import { MenuBrowser } from "@/src/components/features/menu/MenuBrowser";
import { OpenBadge } from "@/src/components/features/restaurant/OpenBadge";
import { featuredDishes } from "@/src/data/menu";
import { restaurant } from "@/src/data/restaurant";

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: "Nuevo",
    title: "Poke bowls frescos y llenos de sabor",
    description:
      "Descubre bowls balanceados, ingredientes premium y promociones pensadas para acompañar tu día.",
    cta: "Ver menú",
    href: "/menu",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    tag: "Top seller",
    title: "Combo crunch para tu próxima comida",
    description:
      "Combina tu poke favorito con toppings crocantes, salsas artesanales y bebidas refrescantes.",
    cta: "Ver combo",
    href: "/menu#pokes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    tag: "Oferta",
    title: "2x1 en bebidas tropicales",
    description:
      "Siente el sabor tropical de la temporada con nuestras bebidas frías y renovadas.",
    cta: "Ver bebidas",
    href: "/menu#bebidas",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      <MenuHero slides={HERO_SLIDES} />

      <section className="mx-auto w-full max-w-2xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-medium">Nuestros destacados</h2>
          <OpenBadge />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {restaurant.hoursSummary}.{" "}
          <Link href="/contacto" className="text-green-800 underline">
            {restaurant.address}
          </Link>
        </p>

        <div className="mt-4">
          <MenuBrowser
            groups={[
              {
                id: "destacados",
                title: "Nuestros destacados",
                navLabel: "Destacados",
                dishes: featuredDishes,
              },
            ]}
          />
        </div>

        <Button className="mt-4" variant="secondary" href="/menu">
          Ver todos
        </Button>
      </section>
    </>
  );
}
