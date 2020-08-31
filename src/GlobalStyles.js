import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
box-sizing: border-box;
}
body {
    margin: 0;
    font-size: 112.5%;
    background: var(--backgroundbeige);
    color: var(--textblack);
    font-family: 'Roboto Mono', monospace;
}

:root {
    --backgroundbeige: #FEFDF9;
    --highlightred: #A33901;
    --textblack: #61615F;
    --shadowgrey: #A5A5A3;
    --highlightbrown: #B87828;

}
`
