import React from "react";
import Pokemonproject from "./Pokemonproject";
// import Pokemone from "./pokemone";
// import Pockmon2 from "./Pockmon2";

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      {/* <Pokemone pokemonName="pikachu" /> */}
      {/* <Pockmon2 apiDataName="pickachu"/> */}
      <Pokemonproject className="text-black-500" />
    </div>
  );
}

export default App;
