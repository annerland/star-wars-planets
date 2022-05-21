import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 40px 152px;
    background: ${(props) => props.theme.backgroundColor};
    font-family: 'Poppins', sans-serif;
  }
`;
 
export default GlobalStyle;