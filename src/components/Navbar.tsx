"use client";
import { useEffect, useState } from "react";
import { useDarkMode, useWindowSize } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TablerMoonStars, TablerSunFilled } from "./Icons";

const links = [
  { href: "/", label: "About me" },
  { href: "/projects", label: "View projects" },
  { href: "/contact", label: "Contact me" },
];

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Navbar() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isDarkMode: darkMode, toggle: toggleDarkMode } = useDarkMode(true);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="h-full flex gap-8 items-center">
      {/* DARK MODE TOGGLER */}
      <button
        className="rounded-full w-8 h-8 overflow-hidden cursor-pointer relative flex justify-center items-center hocus:scale-125 transition-[transform]"
        onClick={toggleDarkMode}
        aria-label="Light theme toggler"
      >
        <motion.div
          animate={{ y: darkMode ? 36 : -32, opacity: darkMode ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 mx-auto absolute -top-[32px]"
        >
          <TablerMoonStars className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: darkMode ? 32 : 0, opacity: darkMode ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 mx-auto absolute"
        >
          <TablerSunFilled className="w-6 h-6" />
        </motion.div>
      </button>

      {/* NAV LINKS ON LARGE VIEWPORT */}
      {windowWidth > 767 ? (
        <ul className="space-x-8 h-full uppercase font-bold text-sm xl:text-base tracking-widest">
          {links.map((link) => (
            <li
              key={link.href}
              className="inline-flex h-full transition-colors duration-300"
            >
              <Link
                href={link.href}
                className={`px-4 py-1 h-full inline-flex items-center ${
                  pathname === link.href
                    ? "border-b-2 border-yellow-400"
                    : "hocus:bg-black hocus:text-white dark:hocus:bg-white dark:hocus:text-black"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {/* NAV LINKS ON SMALL(MOBILE) VIEWPORT */}
      {windowWidth < 768 ? (
        <div className="h-full">
          <button
            className="relative z-50 space-y-1.5 h-full group"
            onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
            aria-label={`${toggleMenu ? "Close" : "Open"} menu`}
          >
            <motion.span
              animate={{ rotateZ: toggleMenu ? 45 : 0, y: toggleMenu ? 8 : 0 }}
              className={`block h-0.5 w-8 bg-black dark:bg-white transition-[margin] ${
                toggleMenu ? "" : "group-hover:my-3 group-focus:my-3"
              }`}
            ></motion.span>
            <motion.span
              animate={{
                x: toggleMenu ? 10 : 0,
                opacity: toggleMenu ? 0 : 100,
              }}
              className="block h-0.5 w-6 bg-black dark:bg-white mx-auto"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggleMenu ? 135 : 0,
                y: toggleMenu ? -8 : 0,
              }}
              className={`block h-0.5 w-8 bg-black dark:bg-white transition-[margin] ${
                toggleMenu ? "" : "group-hover:my-3 group-focus:my-3"
              }`}
            ></motion.span>
          </button>

          <AnimatePresence>
            {toggleMenu ? (
              <motion.ul
                variants={navMotion}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 flex flex-col gap-20 justify-center bg-white dark:bg-black"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.href}
                    className="text-center"
                    variants={itemMotion}
                  >
                    <Link
                      href={link.href}
                      className={`block py-10 text-2xl ${
                        pathname === link.href
                          ? "bg-yellow-400"
                          : "hocus:bg-yellow-400"
                      }`}
                      onClick={() => setToggleMenu(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}
    </nav>
  );
}
