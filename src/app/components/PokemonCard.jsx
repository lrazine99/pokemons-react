import Image from 'next/image';

function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{pokemon.name}</h2>
      <h2 className="text-xl font-bold">{pokemon.pokedexId}</h2>
      <Image
        src={pokemon.sprite}
        alt={pokemon.name}
        className="rounded-lg shadow-md mb-4"
        width={200}
        height={200}
      />
      {pokemon.types.map(({ name }, index) => (
        <span
          key={index}
          className={`inline-block text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default PokemonCard;
