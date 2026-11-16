import { Dish, MenuCategory } from "@/src/models/poke";

const API_URL = process.env.API_URL;

type ApiPoke = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
};

type ApiBebida = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
};

function slugify(name: string, id: number) {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return slug || String(id);
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { cache: "no-cache" });

  if (!response.ok) throw new Error(`API ${path} responded ${response.status}`);

  return response.json() as Promise<T>;
}

function toDish(
  item: {
    id: number;
    name: string;
    description: string;
    img: string;
  },
  price: number,
  category: MenuCategory,
): Dish {
  return {
    id: item.id,
    slug: slugify(item.name, item.id),
    name: item.name,
    description: item.description,
    price,
    image: item.img,
    category,
    ingredients: [],
    available: true,
  };
}

// export function getDishById(id: number) {
//   return menu.find((dish) => dish.id === id);
// }

export async function getMenu() {
  const [pokes, bebidas] = await Promise.all([
    getJson<ApiPoke[]>("/api/pokes"),
    getJson<ApiBebida[]>("/api/bebidas"),
  ]);

  const dishes = [
    ...pokes.map((poke) => toDish(poke, poke.price, "pokes")),
    ...bebidas.map((bebida) => toDish(bebida, bebida.price, "bebidas")),
  ];

  return {
    dishes,
    sections: [
      {
        id: "pokes",
        title: "Nuestros pokes",
        navLabel: "Pokes",
        dishes: dishes.filter((dish) => dish.category === "pokes"),
      },
      {
        id: "bebidas",
        title: "Nuestras bebidas",
        navLabel: "Bebidas",
        dishes: dishes.filter((dish) => dish.category === "bebidas"),
      },
    ],
  };
}
