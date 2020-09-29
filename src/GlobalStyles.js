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
    --highlightcolor: #E1B202;
    --unalignedcolor: lightgreen;
    --lawful-goodcolor: #68c02b;
    --lawful-neutralcolor: #511f7c;
    --lawful-evilcolor:  #FF5733 ;
    --neutral-goodcolor: #308fe0;
    --neutralcolor: lightgrey;
    --neutral-evilcolor: #c0842b;
    --chaotic-goodcolor: #2bc084;
    --chaotic-neutralcolor: #b2c02b;
    --chaotic-evilcolor: #c0392b;
}
`
