import React from 'react'
import styled from 'styled-components'

interface IButton {
  children: React.ReactNode,
  onClick?: (() => void) | undefined,
}


const Button: React.FC<IButton> = ({children, onClick}) => {
  return (
    <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
  )
}

const ButtonWrapper = styled.button.attrs({})`
  border: transparent;
  background: #000;
  padding: 1.2em 4rem;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export default Button