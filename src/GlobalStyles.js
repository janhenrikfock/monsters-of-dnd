import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
box-sizing: border-box;
}
body {
    margin: 0;
    font-size: 112.5%;
    color: var(--textblack);
    font-family: 'Roboto', sans-serif;
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
    /* --highlightcolor: #E1B202; */
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
    /* --chaotic-evilcolor: #c0392b; */
}
`
