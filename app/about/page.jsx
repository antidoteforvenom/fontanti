import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Advantages from "../components/advantages";
import About from "../components/about";
export default function Vault() {
  return (
    <div className=" bg-gray-700">
      <Header />
      <Advantages />
      <About />
    </div>
  );
}
