"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Advantages from "./components/advantages";
import About from "./components/about";
import { initVenomConnect } from "./components/connect/config";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [venomConnect, setVenomConnect] = useState();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <main className=" bg-gray-700">
      <Navbar venomConnect={venomConnect} />
      <Header />
      <Advantages />
      <About />
    </main>
  );
}
