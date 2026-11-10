export type MenuCategory = "pokes" | "bebidas";

export interface Dish {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  ingredients: string[];
  badge?: string;
  available: boolean;
}
