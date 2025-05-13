"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getTypes } from "../helpers/apiHandler";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [limitFilter, setLimit] = useState(50);
  const [typesFilter, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const typesFetched = await getTypes();
        setTypes(typesFetched);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };
    fetchTypes();
  }, []);

  return (
    <FilterContext.Provider
      value={{ nameFilter, setNameFilter, limitFilter, setLimit, typesFilter, setTypes }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used inside a FilterProvider");
  }
  return context;
};
