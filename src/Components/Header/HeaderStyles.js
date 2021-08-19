import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 89px;
    width: 1120px;
    font-size: .9rem;
`;

export const Logo = styled(Link)`
    position: relative;
    left: -10px;
`;

export const NavLinkContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    right: -9.5px;
    width: 232px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    transition: 0.4s ease;
    &:visited {
        color: inherit;
    }
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
`;
