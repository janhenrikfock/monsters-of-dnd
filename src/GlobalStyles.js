import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
box-sizing: border-box;
}
body {
    margin: 0;
    font-size: 112.5%;
    background: var(--backgroundbeige);
    color: #61615F;
}

:root {
    --backgroundbeige: #FEFDF9;
    --highlightred: #A33901;
    --textblack: #61615F;
}
`
