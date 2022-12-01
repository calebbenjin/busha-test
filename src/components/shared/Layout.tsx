import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Header from './Header'
import Sidebar from './Sidebar'

interface ILayout {
  children: React.ReactChild | React.ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <LayoutContainer>
      <Header />
      <Container>
        <Flex>
          <Sidebar />
          <Main>
            {children}
          </Main>
        </Flex>
      </Container>  
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`
const Flex = styled.div`
  display: flex;
`

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 1rem 0 0 4rem;
`

export default Layout