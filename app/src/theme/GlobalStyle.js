import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    
  }
 
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
  
   
  }
`;

export default GlobalStyle;
