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

:root {
    --backgroundbeige: #FEFDF9;
    --highlightred: #f50808;
    --highlightcolor: #E1B202;
    --textblack: #61615F;
    --shadowgrey: #A5A5A3;
    --highlightbrown: #B87828;

}

h2 {
    margin: 5px;
  font-size: 100%;
  font-family: serif;
  color: black;
}

p {
    margin: 0;
}


`
