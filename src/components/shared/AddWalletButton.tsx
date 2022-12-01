import React from 'react'
import styled from 'styled-components'

interface IButton {
  children: React.ReactNode,
  onClick: () => void | null | undefined
}


const AddWalletButton: React.FC<IButton>= ({children, onClick}) => {


  return (
    <Button onClick={onClick}><span>+</span> {children}</Button>
  )
}

const Button = styled.button`
  padding: 0.6rem 1rem;
  background: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s linear; 
  span {
    font-size: 1rem;
    font-weight: 600;
  }

  &:hover {
    background: #F5F7FA;
  }
`

export default AddWalletButton