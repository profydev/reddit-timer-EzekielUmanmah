import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  Container, NavLink, Logo, NavLinkContainer,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Link to="/"><Logo /></Link>
    <NavLinkContainer>
      <li><NavLink to="/search/javascript">Search</NavLink></li>
      <li><NavLink to="/#how-it-works" as={HashLink}>How it works</NavLink></li>
      <li><NavLink to="/#about" as={HashLink}>About</NavLink></li>
    </NavLinkContainer>
  </Container>
);

export default Header;
