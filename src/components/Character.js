import React from 'react'
import { CharacterBox, CharacterInfo, CharacterLocation, CharacterName, CharacterSpecie } from './CharacterStyled'

const Character = ({ name, img, location, species }) => {
  return (
    <CharacterBox>
        <img src={img} alt={name} className="character__img" />
        <CharacterInfo>
          <CharacterName>{name}</CharacterName>
          <CharacterSpecie>Type: {species}</CharacterSpecie>
          <CharacterLocation>{location}</CharacterLocation>
        </CharacterInfo>
    </CharacterBox>
  )
}

export default Character
