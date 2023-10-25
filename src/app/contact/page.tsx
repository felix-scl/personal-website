import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Felix Perez",
};

export default function Contact() {
  return (
    <main className="px-4 xl:px-10 space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28 transition-[padding] duration-300">
      <h1 className="text-3xl text-center w-full xl:text-4xl transition-[font-size] duration-300">
        Let&apos;s work together!
      </h1>
      <ContactForm />
    </main>
  );
}
