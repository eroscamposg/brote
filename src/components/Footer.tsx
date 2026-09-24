import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between w-full px-10 py-6 gap-4 md:flex-row  max-w-2xl">
      <section className="md:flex md:flex-col md:self-center">
        <div className="contact mb-4">
          <h3 className="font-bold">Redes</h3>
          <div className="social-links flex gap-2">
            <a
              className="p-2.5 bg-green-700 rounded-full"
              href="https://www.instagram.com/brotefood"
            >
              <FaInstagram size={26} color="white" />
            </a>
            <a
              className="p-2.5 bg-green-700 rounded-full"
              href="https://www.instagram.com/brotefood"
            >
              <FaFacebookF size={26} color="white" />
            </a>
            <a
              className="p-2.5 bg-green-700 rounded-full"
              href="https://www.instagram.com/brotefood"
            >
              <FaWhatsapp size={26} color="white" />
            </a>
          </div>
        </div>
        <div className="cursor-default">
          <h3 className="font-bold">Contáctenos</h3>
          <p className="text-2xl">(255) 352-6258</p>
        </div>
      </section>
      <section className="store-hours cursor-default">
        <h3 className="font-bold">Horarios de atención</h3>

        <div className="flex flex-col gap-2">
          <p className="text-lg">Martes: 11am - 5pm</p>
          <p className="text-lg">Miercoles: 11am - 5pm</p>
          <p className="text-lg">Jueves: 11am - 5pm</p>
          <p className="text-lg">Viernes: 11am - 5pm</p>
          <p className="text-lg">Sabado: 11am - 5pm</p>
        </div>
      </section>
    </footer>
  );
}
