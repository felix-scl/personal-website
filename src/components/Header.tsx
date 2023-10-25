import Link from "next/link";
import { Logo } from "./Icons";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="px-4 xl:px-10 flex justify-between items-center fixed top-0 w-full z-40 h-16 xl:h-20 transition-[height] duration-300">
      <div className="text-2xl xl:text-3xl cursor-pointer py-4 xl:py-6 transition-[padding,_font-size] duration-300">
        <Link href="/">
          <Logo className="w-10 h-10 dark:fill-white transition-colors duration-300" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}
