"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "./components/NavBar";
import PokemonsContainer from "./components/PokemonsContainer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className=" bg-gray-100">
        <h1 className="text-2xl font-bold text-center py-2">Bienvenue</h1>
        <PokemonsContainer></PokemonsContainer>
      </main>
    </div>
  );
}
