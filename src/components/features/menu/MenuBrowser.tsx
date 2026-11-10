"use client";

import { useState } from "react";
import { Dish } from "@/src/models/poke";
import Card from "@/src/components/ui/Card";
import { DishPanel } from "./DishPanel";

type MenuGroup = {
  id: string;
  title: string;
  navLabel: string;
  dishes: Dish[];
};

export function MenuBrowser({
  groups,
  showNav = false,
  showHeadings = false,
}: {
  groups: MenuGroup[];
  showNav?: boolean;
  showHeadings?: boolean;
}) {
  const [selected, setSelected] = useState<Dish | null>(null);

  return (
    <>
      {/* Add buttons to skip to that section inmediatly */}
      {showNav && (
        <nav className="flex gap-2" aria-label="Categorías del menú">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-green-700 px-4 py-2 text-sm text-green-800"
            >
              {group.navLabel}
            </a>
          ))}
        </nav>
      )}

      {groups.map((group) => (
        // Id + Next Link href + hashtag makes it possible to skip to specific sections
        <section key={group.id} id={group.id} className="scroll-mt-6">
          {/* Show section title */}
          {showHeadings && (
            <h2 className="text-2xl font-medium">{group.title}</h2>
          )}
          <ul className={`${showHeadings ? "mt-4" : ""} flex flex-col gap-2`}>
            {group.dishes.map((dish) => (
              <li key={dish.id}>
                <Card
                  name={dish.name}
                  description={dish.description}
                  imgSrc={dish.image}
                  imgAlt={dish.name}
                  price={dish.price}
                  badge={dish.badge}
                  onClick={() => setSelected(dish)}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <DishPanel dish={selected} onClose={() => setSelected(null)} />
    </>
  );
}
