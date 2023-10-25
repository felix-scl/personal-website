import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Sent! - Felix Perez",
};

export default function page() {
  return (
    <main className="px-4 xl:px-10 space-y-8 md:space-y-12 lg:space-y-16 transition-[padding] duration-300 text-center">
      <h1 className="text-4xl text-yellow-400 md:text-5xl">Email sent!</h1>
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl">
          I&apos;ll get back to you as soon as possible
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">Have a good day!</p>
      </div>
      <div className="text-black flex flex-col gap-4 md:flex-row md:justify-evenly md:gap-0">
        <Link
          href="/"
          className="bg-yellow-300 hocus:bg-yellow-400 px-4 py-2 rounded-md"
        >
          Go to Home
        </Link>
        <Link
          href="/contact"
          className="bg-yellow-300 hocus:bg-yellow-400 px-4 py-2 rounded-md"
        >
          Send another email
        </Link>
      </div>
    </main>
  );
}
