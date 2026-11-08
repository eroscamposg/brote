"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

import { HiXMark } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleSizeChange(e: MediaQueryListEvent | MediaQueryList) {
      if (e.matches) {
        setIsOpen(false);
      }
    }

    handleSizeChange(mediaQuery); // check on mount too, in case already desktop
    mediaQuery.addEventListener("change", handleSizeChange);

    return () => {
      mediaQuery.addEventListener("change", handleSizeChange);
    };
  }, []);

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
        <div className="header flex items-center justify-between p-4 shadow-md">
          {/* Logo */}
          <Link href="/">
            <Image
              src={"/brotelogonobg.png"}
              alt="Brote logo"
              width={120}
              height={40}
            />
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

        <nav
          className="flex flex-col items-start gap-4 p-4"
          aria-label="Main navigation"
        >
          <Button variant={"empty"} href="/" onClick={() => setIsOpen(false)}>
            Home
          </Button>
          <Button variant={"empty"} onClick={() => setIsOpen(false)}>
            About
          </Button>
          <Button
            variant={"empty"}
            href="/menu"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Button>
          <Button variant={"empty"} onClick={() => setIsOpen(false)}>
            Blog
          </Button>
          <Button variant={"empty"} onClick={() => setIsOpen(false)}>
            Contact
          </Button>
        </nav>
      </div>
    </>
  );
}
