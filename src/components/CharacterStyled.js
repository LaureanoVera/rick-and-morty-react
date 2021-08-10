import styled from "styled-components";

export const CharacterBox = styled.div`
  width: 30%;
  min-width: 320px;
  background-color: #1f2937;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 3px 5px #d9e5d6;
  display: flex;
  & img {
    width: 50%;
  }
  @media screen and (max-width: 520px) {
    width: 80%;
    max-width: 80%;
    margin: 2rem;
  }
  @media screen and (max-width: 340px) {
    flex-direction: column;
    align-items: center;
    & img {
      width: 100%;
      height: 210px;
      object-fit: cover;
    }
  }
`

export const CharacterInfo = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 340px) {
    align-items: center;
  }
`

export const CharacterName = styled.h3`
  font-family: 'Fredericka the Great', cursive;;
  color: #828f45;
`

export const CharacterLocation = styled.p`
  text-align: center;
  padding: 5px;
  background-color: #364150;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 15px;
  margin: 3px 0;
  color: white;
`

export const CharacterSpecie = styled.p`
  text-align: center;
  padding: 5px;
  background-color: #364150;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 15px;
  margin: 3px 0;
  color: white;
`