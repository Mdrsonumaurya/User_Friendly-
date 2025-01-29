import axios from "axios";
import React, { useState } from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 m-2 flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        className="w-45 h-28 mb-2"
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <p className="bg-green-400 rounded-lg items-center justify-center py-1 px-1  text-violet-700 font-bold">
        {pokemonData.types.map((curType) => curType.type.name).join(", ")}
      </p>
      <h2 className="text-lg font-semibold text-gray-800 capitalize">
        {pokemonData.name}
      </h2>
      <p>
        <span>Weight</span> {pokemonData.weight}
      </p>
      <p className="text-sm text-gray-600">
        Base Experience: {pokemonData.base_experience}
      </p>
    </div>
  );
};

const PokemonProject = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=300";

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(API);

      const detailedPokemonData = res.data.results.map(async (curPokemon) => {
        const res = await axios.get(curPokemon.url);
        return res.data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
      setError("Unable to fetch Pokémon. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Search Functionality
  const filteredPokemon = search
    ? pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemon;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <section className="container mx-auto p-6">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Let's Catch Pokémon
          </h1>
        </header>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Enter Pokémon name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-64 shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center mb-6">
          <button
            onClick={fetchPokemon}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Fetch Pokémon
          </button>
        </div>

        {loading && (
          <p className="text-center text-blue-500">Loading Pokémon...</p>
        )}

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPokemon.map((curPokemon) => (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PokemonProject;
