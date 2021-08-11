import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background: teal;
        font-family: ${(props) => props.theme.font.main};
        line-height: ${(props) => props.theme.font.lineHieght};
        font-size: ${(props) => props.theme.font.fontSize};
    }
    h1 {
        font-family: ${(props) => props.theme.font.title};
    }
`;

export default GlobalStyles;
