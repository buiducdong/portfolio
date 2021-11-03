import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Sidebar from "./components/Sidebar"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Route, Switch as Switching } from 'react-router-dom'
import BlogsPage from './pages/BlogsPage';
import ResumPage from './pages/ResumPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch  from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    } else {
      setTheme('light-theme')
      setChecked(true)
    }
  }

  const showSidebar = () => {
    setNavToggle(!navToggle)
    setShowOverlay(!showOverlay)
  }
  
  return (
    <div className="App">
      <Sidebar navToggle={navToggle}/>
      <div className='theme'>
        <div className='light-dark-mode'>
          <div className='left-content'>
            <Brightness4Icon />
          </div>
          <div className='right-content'>
            <Switch 
              checked={checked}
              value=''
              inputProps={{ 'aria-label': 'primary checkbox' }}
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className='toggle-menu'>
        <IconButton onClick={() => showSidebar()}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </div>
      <MainContentStyled>
        <div className={showOverlay ? 'showOverlay' : ''} 
        onClick={() => showSidebar()}></div>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        <Switching>
          <Route path='/' exact>
            <HomePage />  
          </Route>
          <Route path='/about'>
            <AboutPage />  
          </Route>
          <Route path='/resum'>
            <ResumPage />  
          </Route>
          <Route path='/portfolios'>
            <PortfoliosPage />  
          </Route>
          <Route path='/blogs'>
            <BlogsPage />  
          </Route>
          <Route path='/contact'>
            <ContactPage />  
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16rem;
  min-height: 100vh;
  .showOverlay{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 3;
  }
  .lines{
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    min-height: 100%;
    width: 100%;
    z-index: -2;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

  //1023
  @media screen and (max-width: 1023px){
    margin-left: 0;
  }
`

export default App;
