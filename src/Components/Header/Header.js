import React from 'react';

import NavLogo from './NavLogo';
import {
  Container, NavLink, Logo, NavLinkContainer,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Logo to="/"><NavLogo /></Logo>
    <NavLinkContainer>
      <li><NavLink to="/search/javascript">Search</NavLink></li>
      <li><NavLink to="/how-it-works">How it works</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </NavLinkContainer>
  </Container>
);

export default Header;
