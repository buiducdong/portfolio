import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #007bff;
    --background-color: #000;
    --secondary-color: #6c757d;
    --background-dark-color: #10121a;
    --background-dark-gray: #191d2b;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191b2d;
    --width-sidebar: 16rem;
    --scrollbar-bg-color: #383838;
    --scrollbar-thumd-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }

  a{
    color: inherit;
    font-size: inherit;
  }

  h1{
    font-size: 3rem;
    color: var(--white-color);
  }

  span{
    color: var(--primary-color);
  }

`

export default GlobalStyle