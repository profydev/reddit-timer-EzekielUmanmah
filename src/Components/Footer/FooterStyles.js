import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent } from './logo.svg';

export const Logo = styled(ReactComponent)`
    display: block;
`;

export const Container = styled.footer`
    display: flex;
    justify-content: space-around;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    transition: .4s ease;
    &:visited {
        color: inherit;
    }
    &:hover {
        color: white;
    }
`;
