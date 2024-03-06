"use client";
import Image from "next/image";
import pfp from "../../public/pfp.png";
import { navItems } from "@/constant/navitems";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import DarkMode from "./DarkMode";
import Link from "next/link";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuShowRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuShowRef.current &&
        !menuShowRef.current.contains(event.target as Node)
      ) {
        setIsMenu(false);
      }
    }

    if (isMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenu]);

  return (
    <header className="w-full h-20 fixed top-0 z-10">
      <nav className="w-full bg-white dark:bg-zinc-800 h-full px-3 sm:px-8 text-slate-700 dark:text-gray-100 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-3 px-2">
          <Link href="https://tusharkarande.vercel.app/">
          <Image
            className="md:size-14 size-12 border-[3px] border-purple-600 rounded-full"
            src={pfp}
            alt="logo"
          />
          </Link>
          <h1 className="text-lg hover-text tracking-wide  uppercase font-bold lg:text-xl ">
            <Link href="https://tusharkarande.vercel.app/">Tushar Karande</Link>
          </h1>
        </div>
        <div className="flex items-center sm:gap-6 gap-8 lg:gap-12">
          <ul className="sm:flex hidden items-center sm:gap-6 md:gap-8 lg:gap-12 font-bold lg:text-lg text-base">
            {navItems.map((item) => (
              <li className="hover-text" key={item.id}>
                <Link href={item.path}>{item.navName}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <DarkMode />
            <div
              ref={menuShowRef}
              className="sm:hidden flex items-center cursor-pointer"
              onClick={() => setIsMenu((prev) => !prev)}
            >
              {isMenu ? (
                <AiOutlineClose
                  className="active:scale-0 active:-rotate-180 duration-700"
                  size={30}
                />
              ) : (
                <AiOutlineMenu
                  className="active:scale-0 active:rotate-180 duration-700"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <ul
        ref={menuRef}
        className={
          isMenu
            ? "px-6 fixed -z-10 bg-gray-100 dark:bg-zinc-700  top-20 left-0  right-0 font-bold text-base shadow-xl ease-in-out duration-700"
            : "px-6 fixed -z-10 bg-gray-100  dark:bg-zinc-700 -top-[500px] left-0 right-0 font-bold text-base duration-700 ease-in-out"
        }
      >
        {navItems.map((item, idx) => (
          <li
            className={
              idx === navItems.length - 1
                ? "py-6 w-full hover-text dark:text-gray-100 text-end"
                : "py-6 border-b hover-text dark:text-gray-100 border-slate-300 w-full text-end"
            }
            key={item.id}
          >
            <Link onClick={() => setIsMenu((prev) => !prev)} href={item.path}>
              {item.navName}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
