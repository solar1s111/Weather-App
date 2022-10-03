import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
  }

  body {
    font-family: 'Urbanist', sans-serif;
	  font-weight: 600;
    background: ${(props) => props.theme.background} no-repeat 0 0 fixed;
    color: ${(props) => props.theme.color};  
    transition: background 0.5s linear, color 0.5s linear;
  }  
`;
