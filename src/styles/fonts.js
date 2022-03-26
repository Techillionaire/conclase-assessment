import { createGlobalStyle } from "styled-components";
import InterMid2 from "../assets/fonts/inter500.woff2";
import InterMid from "../assets/fonts/inter500.woff";
import InterBold from "../assets/fonts/inter700.woff";
import InterBold2 from "../assets/fonts/inter700.woff2";
import Inter2 from "../assets/fonts/interregular.woff2";
import Inter from "../assets/fonts/interregular.woff";

export default createGlobalStyle`
   
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url(${InterMid2}) format('woff2'), 
       url(${InterMid}) format('woff'); 
 font-display: swap;
    
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${Inter2}) format('woff2'),
       url(${Inter}) format('woff'); 

  font-display: swap;

}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${InterBold2}) format('woff2'),
       url(${InterBold}) format('woff'); 
  font-display: swap;

}
`;
