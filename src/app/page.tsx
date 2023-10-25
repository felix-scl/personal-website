import Image from "next/image";
import catImg from "@/app/assets/cat.png";
import { roboto_mono } from "./fonts";
import type { Metadata } from "next";
import { SpinnerIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Felix Perez - Front-end Developer",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-full px-4 xl:px-10 transition-[padding] duration-300">
      <h1 className="text-3xl md:text-5xl transition-[padding,_font-size] duration-300 font-medium animate-fade-in order-2 md:space-y-2 mt-4">
        Hi, I&apos;m{" "}
        <span
          className={`bg-yellow-400 text-white dark:text-black px-4 ${roboto_mono.className}`}
        >
          Félix!
        </span>
        <span className="block">A front-end developer</span>
        <span className="sm:block">trying to break as little code </span>
        <span className="sm:block">
          as{" "}
          <SpinnerIcon className="w-6 h-6 md:w-8 md:h-8 inline-block animate-spin ml-2" />
        </span>
      </h1>

      <div className="w-44 md:w-56 animate-slide-left transition-[width] duration-300">
        <Image src={catImg} alt="black cat" priority />
        <a
          href="https://www.pngall.com/black-cat-png/download/122794"
          target="_blank"
          className="sr-only"
        >
          Black Cat PNG Picture
        </a>
      </div>
    </main>
  );
}
