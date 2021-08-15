import React from 'react';

import NavLogo from './NavLogo';
import {
  Container, NavLink, RouterLink, Logo, NavLinkContainer,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Logo to="/"><NavLogo /></Logo>
    <NavLinkContainer>
      <li><RouterLink to="/search">Search</RouterLink></li>
      <li><NavLink href="#how-it-works">How it works</NavLink></li>
      <li><NavLink href="#about">About</NavLink></li>
    </NavLinkContainer>
  </Container>
);

export default Header;
