import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { mapsHref, restaurant, whatsappHref } from "@/src/data/restaurant";

export default function Footer() {
  return (
    <footer className="flex w-full max-w-2xl flex-col justify-between gap-4 px-10 py-6 md:flex-row">
      <section className="md:flex md:flex-col md:self-center">
        <div className="contact mb-4">
          <h3 className="font-bold">Redes</h3>
          <div className="social-links flex gap-2">
            <a
              className="rounded-full bg-green-700 p-2.5"
              href={restaurant.instagram}
              aria-label="Instagram de Brote"
            >
              <FaInstagram size={26} color="white" />
            </a>
            <a
              className="rounded-full bg-green-700 p-2.5"
              href={whatsappHref()}
              aria-label="WhatsApp de Brote"
            >
              <FaWhatsapp size={26} color="white" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contáctenos</h3>
          <a className="text-2xl" href={`tel:${restaurant.phoneTel}`}>
            {restaurant.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-gray-600">
            <Link href="/contacto">{restaurant.address}</Link>
          </p>
          <a className="text-sm text-green-800 underline" href={mapsHref()}>
            Ver mapa
          </a>
        </div>
      </section>
      <section>
        <h3 className="font-bold">Horarios de atención</h3>
        <div className="mt-2 flex flex-col gap-2">
          {restaurant.hours.map((slot) => (
            <p key={slot.day} className="text-lg">
              {slot.day}: {slot.hours}
            </p>
          ))}
        </div>
      </section>
    </footer>
  );
}
