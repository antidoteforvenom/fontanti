"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { VenomConnect } from "venom-connect";
import { initVenomConnect } from "./components/connect/config";
import React, { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antidote ",
  description:
    "Antidote, $ANTI is the first memecoin that will drive through people's hearts",
};

export default function RootLayout({ children }) {
  const [venomConnect, setVenomConnect] = useState();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar venomConnect={venomConnect} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
