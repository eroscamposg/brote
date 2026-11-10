import type { Metadata } from "next";
import { mapsHref, restaurant, whatsappHref } from "@/src/data/restaurant";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Dirección, horarios y WhatsApp de Brote.",
};

export default function ContactoPage() {
  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-medium">Contacto</h1>
      <p className="mt-4 text-lg">{restaurant.address}</p>
      <p className="text-gray-600">{restaurant.city}</p>
      <a
        className="mt-2 inline-block text-green-800 underline"
        target="_blank"
        href={mapsHref()}
      >
        Ver en Google Maps
      </a>
      <p className="mt-3 text-sm text-gray-500">Ubicado en La Molina</p>

      <h2 className="mt-8 text-xl font-medium">Horarios</h2>
      <ul className="mt-3 space-y-1">
        {restaurant.hours.map((slot) => (
          <li key={slot.day}>
            {slot.day}: {slot.hours}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-medium">Escríbenos</h2>
      <ul className="mt-3 space-y-2">
        <li>
          <a className="underline" href={`tel:${restaurant.phoneTel}`}>
            {restaurant.phoneDisplay}
          </a>
        </li>
        <li>
          <a className="underline" href={restaurant.instagram}>
            Instagram
          </a>
        </li>
        <li>
          <a className="underline" href={whatsappHref()}>
            WhatsApp
          </a>
        </li>
      </ul>
    </article>
  );
}
