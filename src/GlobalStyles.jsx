// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #45e2bf;
        --secondary-color: #919191;
        --font-hover-color : #919191;
        --font-color-white: #eaebeb;
        --border-white: #eaebeb;

        @font-face {
            font-family: 'SpoqaHanSansNeo';
            src: url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
              url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
              url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
          }
          
          @font-face {
            font-family: 'SpoqaHanSansNeo';
            src: url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
              url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
              url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
            font-weight: 500;
            font-style: normal;
          }
          
          @font-face {
            font-family: 'SpoqaHanSansNeo';
            src: url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'), url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
              url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
            font-weight: 700;
            font-style: normal;
          }
          
    }

  * {
    box-sizing: border-box;
    
  }

  html, body {
    margin: 0;
    padding: 50px;
    height: 100%;
    font-size: 100%;
    font-family: 'SpoqaHanSansNeo', sans-serif;
    letter-spacing : 0.7px;
    background-color : #2f3437;
  }

  img, picture, video, canvas {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
