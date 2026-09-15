"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

import { HiXMark } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebar.current && !sidebar.current.contains(event.target as Node))
        setIsOpen(false);
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger button */}
      <button
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <IoMenu size={32} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebar}
        className={`fixed top-0 left-0 z-50 h-full w-4/6 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 shadow-md">
          {/* Logo */}
          {/* <Image
            src="/public/next.svg"
            alt="Logo"
            className="h-6"
            width={24}
            height={24}
          /> */}
          <Link href="/" className="text-2xl font-bold">
            Brote
          </Link>

          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            aria-label="Close menú"
            variant={"empty"}
            size={"sm"}
          >
            <HiXMark size={32} />
          </Button>
        </div>
      </div>
    </>
  );
}
