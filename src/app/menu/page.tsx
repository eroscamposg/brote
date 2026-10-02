import Card from "@/src/components/Card";

const MENU = [
  {
    id: 1,
    name: "Mediterraneo Poke",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
  {
    id: 2,
    name: "Mediterraneo Poke",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
  {
    id: 3,
    name: "Mediterraneo Poke",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
];

const DRINKS = [
  {
    id: 10,
    name: "Bebida de carambola",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
  {
    id: 11,
    name: "Bebida de maracuya",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
  {
    id: 12,
    name: "Bebida de piña",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    price: 25,
  },
];

export default function Menu() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <div className="text-2xl font-medium">Nuestros pokes</div>
        <ul className="flex flex-col gap-2">
          {MENU.map((dish) => (
            <Card
              key={dish.id}
              name={dish.name}
              description={dish.description}
              imgSrc={"/public/globe.svg"}
              imgAlt={"something"}
              price={dish.price}
            />
          ))}
        </ul>
      </section>

      <section>
        <div className="text-2xl font-medium">Nuestras bebidas</div>
        <ul className="flex flex-col gap-2">
          {MENU.map((dish) => (
            <Card
              key={dish.id}
              name={dish.name}
              description={dish.description}
              imgSrc={"/public/globe.svg"}
              imgAlt={"something"}
              price={dish.price}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
