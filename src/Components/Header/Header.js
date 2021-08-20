import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container, NavLink, Logo, NavLinkContainer, PageLink,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Link to="/"><Logo /></Link>
    <NavLinkContainer>
      <li><NavLink to="/search/javascript">Search</NavLink></li>
      <li><PageLink href="/#how-it-works">How it works</PageLink></li>
      <li><PageLink href="/#about">About</PageLink></li>
    </NavLinkContainer>
  </Container>
);

export default Header;
