import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import { CartProvider } from "@/src/components/features/cart/CartProvider";
import { CartDrawer } from "@/src/components/features/cart/CartDrawer";
import { MobileCartBar } from "@/src/components/features/cart/MobileCartBar";

const fraunces = localFont({
  src: "../fonts/FrauncesVariable.ttf",
  variable: "--font-fraunces",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brote",
    template: "%s · Brote",
  },
  description:
    "Poke bowls frescos y bebidas de la casa. Revisa el menú y arma tu pedido.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <main className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
            <Header />
            <div className="flex flex-1 w-full flex-col items-center justify-between bg-white sm:items-start">
              {children}
            </div>
            <Footer />
          </main>
          <CartDrawer />
          <MobileCartBar />
        </CartProvider>
      </body>
    </html>
  );
}
