import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
@font-face {
    font-family: "Graphik";
    font-weight: 400;
    src: local(""),
      url("../assets/fonts/Graphik-Regular.woff2") format("woff2"),
      url("../assets/fonts/Graphik-Regular.woff") format("woff"),
  }
@font-face {
    font-family: "Graphik";
    font-weight: 500;
    src: local(""),
      url("../assets/fonts/Graphik-Medium.woff2") format("woff2"),
      url("../assets/fonts/Graphik-Medium.woff") format("woff"),
  }

  @font-face{
      font-family: 'GTWalsheimPro';
      font-style: 700;
      src: local(""), 
      url("../assets/fonts/GTWalsheimPro-Bold.woff2") format("woff2"),
      url("../assets/fonts/GTWalsheimPro-Bold.woff") format("woff"),
  }
  @font-face{
      font-family: 'GTWalsheimPro';
      font-style: 500;
      src: local(""), 
      url("../assets/fonts/GTWalsheimPro-Medium.woff2") format("woff2"),
      url("../assets/fonts/GTWalsheimPro-Medium.woff") format("woff"),
  }

  

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body {
      width: 100%;
      max-width: 1400px;
  }

`;
