import Image from "next/image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  onClick?: () => void;
}

export default function Card({
  imgSrc,
  imgAlt,
  name,
  description,
  price,
  badge,
  onClick,
}: CardProps) {
  const className =
    "flex w-full items-center gap-4 rounded-lg bg-white p-4 text-left shadow-sm transition-shadow duration-200 hover:shadow-md cursor-pointer";

  const content = (
    <>
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-md md:h-24 md:w-24">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-gray-900">
              {name}
            </h3>
            {badge && (
              <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-gray-500">{description}</p>
        </div>
        <span className="mt-2 font-medium text-gray-900">S/. {price}</span>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  return <div className={className}>{content}</div>;
}
