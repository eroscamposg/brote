// import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMovement = (event: MouseEvent) => {
  //   // clientX and clientY get coordinates relative to the browser viewport
  //   setPosition({
  //     x: event.clientX,
  //     y: event.clientY,
  //   });
  // };

  return (
    <header className="flex w-full bg-white z-50 text-black p-6 shadow-sm">
      <div className="flex justify-between w-full">
        <button className="text-2xl font-bold">Brote</button>
        <button className="cursor-pointer">
          <IoMenu size={36} />
        </button>
      </div>
    </header>
  );
}
