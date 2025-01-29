// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Pokemon = ({ pokemonName }) => {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//         );
//         setPokemon(response.data);
//         console.log(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemon();
//   }, [pokemonName]);

//   if (loading) return <p>Loading...</p>; // Show loading while data is fetching
//   if (error) return <p>Error: {error}</p>; // Show error if any

//   return (
//     <div className="p-4 border rounded shadow-md w-64 text-center">
//       <img
//         src={pokemon.sprites.other.dream_world.front_default}
//         alt={pokemon.name}
//         className="w-32 h-32 mx-auto"
//       />
//       <h2 className="text-xl font-bold capitalize mt-2">{pokemon.name}</h2>
//     </div>
//   );
// };

// export default Pokemon;
