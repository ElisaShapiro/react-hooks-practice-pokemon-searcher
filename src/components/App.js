import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(pokemonData => setPokemonCards(pokemonData))
  }, [])

  return (
    <div className="App">
      <PokemonPage pokemonCards={pokemonCards}/>
    </div>
  );
}

export default App;
