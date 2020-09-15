import { createGlobalStyle } from 'styled-components'

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
    --textblack: #61615F;
    --shadowgrey: #A5A5A3;
    --highlightbrown: #B87828;

}

p {
    margin: 0;
}

`
