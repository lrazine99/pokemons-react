import { useEffect, useState } from "react";
import { getTypes } from "../helpers/apiHandler";

const limits = [10, 20, 30, 50];

function CustomFilters() {
  const [limitSelected, setLimit] = useState(50);
  const [types, setTypes] = useState([]);
  const [typeSelected, setType] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

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
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Chercher un Pokémon..."
        className="px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-800 placeholder-gray-500 w-48"
      />

      <select className="px-3 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
        <option value="">Types</option>
        {types.map(({ name, image }, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <select className="px-3 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
        {limits.map((limit, index) => (
          <option
            key={index}
            value={limit}
            defaultValue={limitSelected === limit}
          >
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomFilters;
