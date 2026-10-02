import Image from "next/image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
  price: number;
}

export default function Card({
  imgSrc,
  imgAlt,
  name,
  description,
  price,
}: CardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
      {/* Image */}
      <div className="relative w-28 h-28 md:w-24 md:h-24 shrink-0 rounded-md overflow-hidden">
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">
            {description}
          </p>
        </div>
        <span className="font-medium text-gray-900 mt-2">S/. {price}</span>
      </div>
    </div>
  );
}
