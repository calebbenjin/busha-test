import React from 'react'
import styled from 'styled-components'
import logoimg from '../../assets/logo.png'

const Logo = () => {
  return (
    <BrandLogo>
      <img src={logoimg} alt="Brand Logo" />
    </BrandLogo>
  )
}

const BrandLogo = styled.div`
  img {
    width: 100px;
  }
`

export default Logo