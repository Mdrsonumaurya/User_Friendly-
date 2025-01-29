// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Pockmon2 = () => {
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

//   // const fetchPokemon = () => {
//   //     axios
//   //           .get(API)
//   //     .then((response) => {
//   //       setApiData(response.data); // Update state with fetched data
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //       setError(error);
//   //       setLoading(false);
//   //     });
//   // };

//   const fetchPokemon = async () => {
//     try {
//       const res = await axios.get(APT);
//       const data = await res.json();
//       setApiData(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setError(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPokemon();
//   }, []);

//   console.log(apiData);
//   return (
//     <div className="flex justify-center items-center p-52 bg-gray-300 min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">
//           Fetched Data:
//         </h1>
//         {apiData ? (
//           <div className="text-center">
//             <img
//               src={apiData.sprites.other.dream_world.front_default}
//               alt={apiData.name}
//               className="w-32 h-32 mx-auto mb-4"
//             />
//             <ul className="flex space-y-2 text-lg text-gray-700">
//               <li>
//                 <span className="font-semibold">ID:</span> {apiData.id}
//               </li>
//               <li>
//                 <span className="font-semibold">Name:</span> {apiData.name}
//               </li>
//               <li>
//                 <span className="font-semibold">Height:</span> {apiData.height}
//                 dm
//               </li>
//               <li>
//                 <span className="font-semibold ">Weight:</span> {apiData.weight}
//                 hg
//               </li>
//               <li>
//                 <span className="font-semibold ">Speed:</span>{" "}
//                 {apiData.stats[5].base_stat}
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <p className="text-center text-lg text-gray-500">{error.message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Pockmon2;
