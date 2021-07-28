import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemonCard}) {
  const [isClicked, setIsClicked] = useState(true)
  const handleIsClicked = () => setIsClicked(!isClicked)

  return (
    <Card>
      <div>
        
        <div onClick={handleIsClicked} className="image">
          { isClicked ? <img src={pokemonCard.sprites.front} alt="oh no!" />
                    : <img src={pokemonCard.sprites.back} alt="oh no!" /> }
        </div>
        
        <div className="content">
          <div className="header">{pokemonCard.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemonCard.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
