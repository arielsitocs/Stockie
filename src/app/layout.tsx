import { Alata, Jua } from "next/font/google";

import "./styles/globals.css";

import Navbar from "@/components/navbar/NavBar";

// DEFINICIÓN DE FUENTES GLOBALES //
const jua = Jua({
  variable: "--font-jua",
  weight: "400",
  subsets: ["latin"]
});

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"]
});
// ------------------------------ //

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jua.variable} ${alata.variable} antialiased`}>
        <Navbar />
        <main>
          { children }
        </main>
      </body>
    </html>
  );
}
