import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body {
      width: 100%;
      max-width: 1400px;
      
      
    }
    h1,p{
     font-size: 16px;
    line-height: 32px;
      font-family: 'Inter', sans-serif;
      color: #3F403F;

      font-weight: 400;
      padding: 0;
      margin: 0;

    
  }

  section{
    padding: 0 12px;
    margin-bottom: 70px;

    @media (min-width: 576px) {
        padding: 0 32px;
        margin-bottom:  140px;
    }
  }


`;
