import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent } from './redditLogo.svg';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90vw;
    height: ${(props) => props.theme.size.headerHeight};
`;

export const Logo = styled(ReactComponent)`
    
`;

export const NavLinkContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const NavLink = styled(Link)`
    font-size: ${(props) => props.theme.font.size.small};
    text-decoration: none;
    transition: 0.4s ease;
    margin-left: 20px;
    &:visited {
        color: inherit;
    }
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
`;
