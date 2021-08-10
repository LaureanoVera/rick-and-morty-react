import styled from "styled-components";
import bgimage from '../images/bg2.jpg'

export const HeaderMain = styled.header`
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    content: "";
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg, #1f2937, #111927);
    opacity: .8;
  }
`

export const HeaderTitle = styled.h1`
  padding: 4px;
  color: #82bf45;
  font-size: 1.7rem;
  z-index: 10;
  font-family: 'Fredericka the Great', cursive;;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

export const HeaderText = styled.p`
  z-index: 10;
  color: #17a3ac;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`