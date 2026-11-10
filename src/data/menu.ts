import { Dish } from "../models/poke";

export const menu: Dish[] = [
  {
    id: 1,
    slug: "mediterraneo",
    name: "Mediterraneo Poke",
    description: "Arroz, pepino, tomate, aceitunas y aderezo de limón.",
    price: 25,
    image: "/marino.png",
    category: "pokes",
    ingredients: ["Arroz", "Pepino", "Tomate", "Aceitunas", "Aderezo de limón"],
    badge: "Nuevo",
    available: true,
  },
  {
    id: 2,
    slug: "tropical",
    name: "Poke Tropical",
    description: "Base de arroz, mango, piña y sésamo tostado.",
    price: 28,
    image: "/marino.png",
    category: "pokes",
    ingredients: ["Arroz", "Mango", "Piña", "Sésamo tostado"],
    badge: "Más pedido",
    available: true,
  },
  {
    id: 3,
    slug: "verde",
    name: "Poke Verde",
    description: "Arroz, palta, edamame, espinaca y pepino.",
    price: 27,
    image: "/marino.png",
    category: "pokes",
    ingredients: ["Arroz", "Palta", "Edamame", "Espinaca", "Pepino"],
    available: true,
  },
  {
    id: 10,
    slug: "carambola",
    name: "Bebida de carambola",
    description: "Jugo frío de carambola.",
    price: 12,
    image: "/maracuyanobg.png",
    category: "bebidas",
    ingredients: ["Carambola", "Agua", "Hielo"],
    available: true,
  },
  {
    id: 11,
    slug: "maracuya",
    name: "Bebida de maracuya",
    description: "Jugo frío de maracuyá.",
    price: 12,
    image: "/maracuyanobg.png",
    category: "bebidas",
    ingredients: ["Maracuyá", "Agua", "Hielo"],
    available: true,
  },
  {
    id: 12,
    slug: "pina",
    name: "Bebida de piña",
    description: "Jugo frío de piña.",
    price: 12,
    image: "/maracuyanobg.png",
    category: "bebidas",
    ingredients: ["Piña", "Agua", "Hielo"],
    available: true,
  },
  {
    id: 13,
    slug: "chicha",
    name: "Chicha",
    description: "Chicha morada de la casa.",
    price: 12,
    image: "/maracuyanobg.png",
    category: "bebidas",
    ingredients: ["Maíz morado", "Piña", "Canela", "Clavo"],
    available: true,
  },
  {
    id: 14,
    slug: "emoliente",
    name: "Emoliente",
    description: "Emoliente caliente, receta de casa.",
    price: 12,
    image: "/maracuyanobg.png",
    category: "bebidas",
    ingredients: ["Cebada", "Linaza", "Hierbas"],
    available: true,
  },
];

export const menuSections = [
  {
    id: "pokes",
    title: "Nuestros pokes",
    navLabel: "Pokes",
    dishes: menu.filter((dish) => dish.category === "pokes"),
  },
  {
    id: "bebidas",
    title: "Nuestras bebidas",
    navLabel: "Bebidas",
    dishes: menu.filter((dish) => dish.category === "bebidas"),
  },
];

export const featuredDishes = menuSections[0].dishes;

export function getDishById(id: number) {
  return menu.find((dish) => dish.id === id);
}
