import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
box-sizing: border-box;
}
html {
    @media (min-width: 750px){
        margin-left: 30%;
    }
}

header {
    max-width: 750px;
    @media (min-width: 750px){
        
    }

}

body {
    margin: 0;
    font-size: 112.5%;
    color: var(--textblack);
    font-family: 'Roboto', sans-serif;
    max-width: 750px;
    }

h2 {
padding: 10px;
  font-size: 22px;
  font-family: serif;
  color: var(--headlineblack);
}

p {
    margin: 0;
}
:root {
    --headlineblack: #262626;
    --textblack: #61615F;
    --bordergrey: #d0d0cd;
    --highlightcolor: #f8b26a;
    --unalignedcolor: lightgreen;
    --lawful-goodcolor: #abbd81;
    --lawful-neutralcolor: #511f7c;
    --lawful-evilcolor: #f47e60;
    --neutral-goodcolor: #308fe0;
    --neutralcolor: lightgrey;
    --neutral-evilcolor: #c0842b;
    --chaotic-goodcolor: #2bc084;
    --chaotic-neutralcolor: #b2c02b;
    --chaotic-evilcolor: #e15b64;
}
`
