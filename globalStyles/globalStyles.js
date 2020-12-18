// import libraries
import { createGlobalStyle } from 'styled-components';

// import variables
import { fonts } from './stylesVariables';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.fontLato};
  }
  h1 {
    font-size: ${fonts.h1};
    }
	h2 {
    font-size: ${fonts.h2};
  }
	h3 {
    font-size: ${fonts.h3};
  }
	p {
    font-size: ${fonts.p};
  }
	small {
    font-size: ${fonts.small};
  }

`;
