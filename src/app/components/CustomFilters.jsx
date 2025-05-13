import { useEffect, useState } from "react";
import { getTypes } from "../helpers/apiHandler";
import { useFilter } from "../hooks/FiltersContext";

const limits = [10, 20, 30, 50];

function CustomFilters() {
  const {
    nameFilter,
    limitFilter,
    typesFilter,
    setNameFilter,
    setTypes,
    setLimit,
  } = useFilter();

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Chercher un Pokémon..."
        className="px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-800 placeholder-gray-500 w-48"
      />

      <select
        multiple
        className="px-3 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <option value="">Types</option>
        {typesFilter.map(({ name, id }, index) => (
          <option
            key={index}
            value={name}
            onClick={() => setTypes((prevTypes) => {

              const isSelected = prevTypes.some((type) => type.id === id);
              if (isSelected) {
                return prevTypes.filter((type) => type.id !== id);
              } else {
                return [...prevTypes, { name, id }];
              }
            })}
            defaultValue={typesFilter.includes(id)}
          >
            {name}
          </option>
        ))}
      </select>

      <select className="px-3 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
        {limits.map((limit, index) => (
          <option
            key={index}
            value={limit}
            onClick={() => setLimit(limit)}
            defaultValue={limitFilter === limit}
          >
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomFilters;
