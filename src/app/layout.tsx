import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { roboto } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} font-roboto min-h-[100dvh] bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 grid place-content-center pb-16 py-20 xl:pb-20 xl:py-24`}
      >
        <Header />
        <div className="bg-gradient-to-b from-white dark:from-black to-transparent from-70% h-20 fixed top-0 w-full z-20"></div>
        {children}
        <div className="bg-gradient-to-t from-white dark:from-black to-transparent from-60% h-20 fixed bottom-0 w-full z-20"></div>
        <Footer />
      </body>
    </html>
  );
}
