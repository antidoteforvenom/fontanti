"use client";
//import logo from "./logo.png";
//import Image from "next/image";
import { VenomConnect } from "venom-connect";
import { ProviderRpcClient } from "everscale-inpage-provider";
import React, { useEffect, useState } from "react";
export default function Navbar({ venomConnect }) {
  const [venomProvider, setVenomProvider] = useState();
  const [standaloneProvider, setStandAloneProvider] = useState();
  const [address, setAddress] = useState();

  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };

  const checkAuth = async (_venomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };

  const initStandalone = async () => {
    const standalone = await venomConnect?.getStandalone();
    setStandAloneProvider(standalone);
  };

  const onLogin = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };

  const onConnect = async (provider) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };

  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };

  const onProviderReady = async (provider) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;
    setAddress(venomWalletAddress);
  };

  useEffect(() => {
    const off = venomConnect?.on("connect", onConnect);

    if (venomConnect) {
      initStandalone();
      checkAuth(venomConnect);
    }

    return () => {
      off?.();
    };
  }, [venomConnect]);

  return (
    <div className="flex  py-2  bg-slate-500  justify-around items-center">
      <div className="flex items-center gap-2">
        {" "}
        <h1 className="font-mono font-bold text-4xl text-white">Antidote</h1>
      </div>
      <nav className="space-x-10 text-white text-xl font-mono font-medium">
        <a href="/">Home</a>
        <a href="/vault">Vault</a>

        <a href="BuyToken">buy,$ANTI</a>

        {address ? (
          <>
            {" "}
            <p>{address}</p>
            <button className="logout" onClick={onDisconnect}>
              Logout
            </button>
          </>
        ) : (
          <button
            className="pr-6 pl-6 p-3 bg-blue-600 rounded-md"
            onClick={onLogin}
          >
            Connect wallet
          </button>
        )}
      </nav>
    </div>
  );
}
/*    <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />*/
