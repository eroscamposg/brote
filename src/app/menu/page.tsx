import Card from "@/src/components/Card";

const MENU = [
  {
    id: 1,
    name: "Mediterraneo Poke",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 25,
  },
  {
    id: 2,
    name: "Poke Tropical",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 28,
  },
  {
    id: 3,
    name: "Poke Verde",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 27,
  },
];

const DRINKS = [
  {
    id: 10,
    name: "Bebida de carambola",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 12,
  },
  {
    id: 11,
    name: "Bebida de maracuya",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 12,
  },
  {
    id: 12,
    name: "Bebida de piña",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 12,
  },
];

export default function Menu() {
  return (
    <div className="mx-auto flex w-full max-w-300 flex-col gap-10 px-4 py-6 sm:px-6">
      <section>
        <div className="text-2xl font-medium">Nuestros pokes</div>
        <ul className="mt-4 flex flex-col gap-2">
          {MENU.map((dish) => (
            <Card
              key={dish.id}
              name={dish.name}
              description={dish.description}
              imgSrc={dish.img || "/public/globe.svg"}
              imgAlt={dish.name}
              price={dish.price}
            />
          ))}
        </ul>
      </section>

      <section>
        <div className="text-2xl font-medium">Nuestras bebidas</div>
        <ul className="mt-4 flex flex-col gap-2">
          {DRINKS.map((drink) => (
            <Card
              key={drink.id}
              name={drink.name}
              description={drink.description}
              imgSrc={drink.img || "/public/globe.svg"}
              imgAlt={drink.name}
              price={drink.price}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
