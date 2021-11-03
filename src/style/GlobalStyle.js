import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* :root{
    --primary-color: #007bff;
    --primary-color-light: #057fff;
    --secondary-color: #6c757d;
    --background-color: #000;
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
  } */
  .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057fff;
    --secondary-color: #6c757d;
    --background-dark-color: #f1f1f1;
    --background-dark-gray: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #f1f1f1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #e4e4e4;
    --width-sidebar: 16rem;
  }
  .dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057fff;
    --secondary-color: #6c757d;
    --background-color: #000;
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

  body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
  }
  body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
  }
  body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
  }

  a{
    color: inherit;
    font-size: inherit;
  }

  h1{
    font-size: 3rem;
    color: var(--white-color);
    @media screen and (max-width: 500px){
        font-size: 2rem;
    }
  }

  span{
    color: var(--primary-color);
  }

  //theme button toggle
  .light-dark-mode{
    position: fixed ;
    right: 0px;
    top: 50%;
    z-index: 3;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    background-color: var(--border-color);
    border-radius: 1rem;
    padding-left: 4px;
    opacity: .8;
    justify-content: center;
    svg{
      color: var(--white-color);
    }
  }

  //toggle menu
  .toggle-menu{
    display: none;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 10;
    svg{
      font-size: 2rem;
      color: var(--primary-color);
    }
    @media screen and (max-width: 1023px){
      display: block;
    }
  }
  .nav-toggle{
    transform: translateX(0);
  }

`

export default GlobalStyle