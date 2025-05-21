"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import GithubIcon from "../assets/GithubIcon";
import NavbarEntry from "./NavbarEntry";

const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export const NOT_EXPANDED = "sm:max-h-14";

export default function Navbar() {
  const [maxHeightClassName, setMaxHeightClassName] = useState(NOT_EXPANDED);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    maxHeightClassName === NOT_EXPANDED
      ? setMaxHeightClassName("sm:max-h-full")
      : setMaxHeightClassName(NOT_EXPANDED);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setMaxHeightClassName(NOT_EXPANDED);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed bg-quaternary font-bold text-white ${inter.className} w-full shadow-md z-10`}
    >
      <ul
        className={`m-auto flex max-w-3xl items-center justify-between gap-6 p-4 text-xs font-bold uppercase text-quinary transition-all duration-300 ease-in-out sm:m-0 sm:max-w-fit sm:flex-col sm:items-start sm:overflow-hidden ${maxHeightClassName} sm:text-sm`}
      >
        <li className="hidden sm:block">
          <span onClick={toggleMenu}>Menu</span>
        </li>
        <li className="mr-auto sm:mr-0">
          <NavbarEntry href="/" toggleMenu={toggleMenu} pathname={pathname}>
            Roberto Reale
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="/recent-work"
            toggleMenu={toggleMenu}
            pathname={pathname}
          >
            Recent work
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="/projects"
            toggleMenu={toggleMenu}
            pathname={pathname}
          >
            Projects
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="/dev-notes"
            toggleMenu={toggleMenu}
            pathname={pathname}
          >
            Dev Notes
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="mailto:roberto.reale.ja@gmail.com"
            toggleMenu={toggleMenu}
            pathname={pathname}
          >
            Email
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="/docs/roberto_reale_fs_200525_online.pdf"
            toggleMenu={toggleMenu}
            pathname={pathname}
            target="_blank"
          >
            Resume PDF
          </NavbarEntry>
        </li>
        <li>
          <NavbarEntry
            href="https://github.com/sickdyd"
            toggleMenu={toggleMenu}
            pathname={pathname}
            target="_blank"
          >
            <GithubIcon />
          </NavbarEntry>
        </li>
      </ul>
    </nav>
  );
}
