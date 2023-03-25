import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
        //box-shadow: 0 0 0 1px red;
        overflow: hidden;
    }

    body {
        background: radial-gradient(circle at 50% 50%,#ff90a8, #c1139e, #650b9e);    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`;
