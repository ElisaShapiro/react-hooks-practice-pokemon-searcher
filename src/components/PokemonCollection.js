import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonCards }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards.map((pokemonCard) => {
        return (<PokemonCard 
          key={pokemonCard.id}
          pokemonCard={pokemonCard}
        />)
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
