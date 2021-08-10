import React, { useState, useEffect } from "react";
import Character from "./Character";
import { CharacterList, CharactersMain } from "./CharactersStyles";

const Characters = () => {
  // Estados
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results));
  }, []);

  console.log(character);

  return (
    <CharactersMain>
      <CharacterList>
        {character.map((el) => (
          <Character key={el.id} name={el.name} img={el.image} location={el.location.name} species={el.species} />
        ))}
      </CharacterList>
    </CharactersMain>
  );
};

export default Characters;
