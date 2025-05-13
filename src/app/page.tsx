"use client";

import React from "react";
import Navbar from "./components/NavBar";
import PokemonsContainer from "./components/PokemonsContainer";
import { FilterProvider } from "./hooks/FiltersContext";

export default function Home() {
  return (
    <FilterProvider>
      <div className="">
        <Navbar />
        <main className=" bg-gray-100">
          <h1 className="text-2xl font-bold text-center py-2">Bienvenue</h1>
          <PokemonsContainer></PokemonsContainer>
        </main>
      </div>
    </FilterProvider>
  );
}
