import MenuHero from "../components/MenuHero";

const HERO_SLIDES = [
  {
    id: 1,
    tag: "Nuevo",
    title: "Poke bowls frescos y llenos de sabor",
    description:
      "Descubre bowls balanceados, ingredientes premium y promociones pensadas para acompañar tu día.",
    cta: "Ver menú",
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
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    tag: "Oferta",
    title: "2x1 en bebidas tropicales",
    description:
      "Siente el sabor tropical de la temporada con nuestras bebidas frías y renovadas.",
    cta: "Reservar",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <>
      <MenuHero slides={HERO_SLIDES} />
    </>
  );
}
