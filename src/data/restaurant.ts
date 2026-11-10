/**
 * Replace phone, WhatsApp, and address before publishing.
 * WhatsApp must be digits only, with country code (example: 51987654321).
 */
export const restaurant = {
  name: "Brote",
  instagram: "https://www.instagram.com/brotefood",
  phoneDisplay: "(+51) 980915578",
  phoneTel: "+51980915578",
  whatsappNumber: "51980915578",
  address: "La Molina, Ovalo los condores",
  city: "Lima, Perú",
  hoursSummary: "Martes a sábado, horarios en la tarde y noche",
  hours: [
    { day: "Martes", hours: "11:30am - 3:30pm / 7:30pm - 10:30pm" },
    { day: "Miércoles", hours: "7:30pm - 10:30pm" },
    { day: "Jueves", hours: "7:30pm - 10:30pm" },
    { day: "Viernes", hours: "11:30am - 3:30pm / 7:30pm - 10:30pm" },
    { day: "Sábado", hours: "11:30am - 3:30pm" },
  ],
};

export function whatsappHref(message = "Hola, quiero hacer un pedido.") {
  return `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsHref() {
  const query = `${restaurant.address}, ${restaurant.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// Util to define open hours
export function isOpenNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Lima",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const openDays = ["Tue", "Wed", "Thu", "Fri", "Sat"];

  return openDays.includes(weekday ?? "") && hour >= 11 && hour < 17;
}
