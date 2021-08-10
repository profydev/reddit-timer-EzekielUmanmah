import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};
    
    body {
        background: teal;
        font-size: 1.6rem;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
