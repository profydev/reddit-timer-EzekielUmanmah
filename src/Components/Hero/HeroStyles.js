import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const styles = css`
    text-align: center;
    text-decoration: none;
`;

export const Title = styled.h1`
    ${styles};
    margin-bottom: 0;
`;

export const Subtitle = styled.h3`
    ${styles}
    font-size: ${(props) => props.theme.font.size.small};
    color: ${(props) => props.theme.color.text};
`;

export const StyledLink = styled(Link)`
    ${styles}
    margin-top: 30px;
    background-color: #f5bf42;
    border-radius: 5px;
    padding: .8em;
    color: ${(props) => props.theme.color.light};
    font-size: ${(props) => props.theme.font.size.small};
`;

export const ImgLink = styled(Link)`
    ${styles}
`;

export const Para = styled(Subtitle)`
    margin: 30px 0;
`;
