import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavLink to="/" className="navlink">Wallet</NavLink>
        <NavLink to="/prices" className="navlink">Prices</NavLink>
        <NavLink to="/peer2peer" className="navlink">Peer2Peer</NavLink>
        <NavLink to="/activity" className="navlink">Activity</NavLink>
        <NavLink to="/settings" className="navlink">Settings</NavLink>
      </NavList>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.nav`
  height: 100vh;
  width: 20%;
  padding-top: 3.5rem;
`
const NavList = styled.nav`
  .navlink {
    display: block;
    line-height: 3rem;
    text-decoration: none;
    color: #3E4C59;
    font-size: 1rem;
    padding: 0 0.6rem;
  }

  .active {
    background: #F5F7FA;
    color: #000;
    border-radius: 3px;
  }
`

export default Sidebar