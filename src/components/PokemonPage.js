import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemonCards, setPokemonCards }) {
  const [userInput, setUserInput] = useState("")

  const searchedPokemonCards = pokemonCards.filter((pokemonCard) => pokemonCard.name.toLowerCase().includes(userInput.toLowerCase()))
  
  const addNewPokemon = newPokemon => {
    setPokemonCards(oldPokemonCards => {
      const newPokemonCards= [...oldPokemonCards]
      newPokemonCards.push(newPokemon)
      return newPokemonCards
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search userInput={userInput} setUserInput={setUserInput}/>
      <br />
      <PokemonCollection pokemonCards={searchedPokemonCards} />
    </Container>
  );
}

export default PokemonPage;
