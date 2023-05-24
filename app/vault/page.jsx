import React from "react";
import Navbar from "../components/navbar";

import DaiV from "../components/Vault/daiV";
import UsdcV from "../components/Vault/usdcV";
import UsdtV from "../components/Vault/usdtV";

export default function Vault() {
  return (
    <div className=" bg-gray-700 h-full">
      <Navbar />
      <h1 className="text-center text-[#b2ce98] text-2xl font-semibold pt-6">
        Deposit and Earn $ANTI
      </h1>
      <div className="mx-auto container">
        <h1 className="text-3xl pt-8 text-slate-200 ">Vault</h1>
        <h1 className="text-gray-400">Deposit & Earn money </h1>
        <div className="space-y-6 pt-2">
          <DaiV />
          <UsdcV />
          <UsdtV />
        </div>
      </div>
    </div>
  );
}
