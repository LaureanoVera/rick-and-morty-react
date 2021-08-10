import React from 'react'
import { HeaderMain, HeaderText, HeaderTitle } from './HeaderStyled'

const Header = ({ title, text }) => {
  return (
    <HeaderMain>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderText>{text}</HeaderText>
    </HeaderMain>
  )
}

export default Header
