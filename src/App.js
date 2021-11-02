import React from 'react';
import styled from 'styled-components'
import Sidebar from "./components/Sidebar"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Switch, Route } from 'react-router-dom'
import BlogsPage from './pages/BlogsPage';
import ResumPage from './pages/ResumPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';

function App() {
  
  return (
    <div className="App">
      <Sidebar />

      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
          
        </div>
        <Switch>
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
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: var(--width-sidebar);
  min-height: 100vh;
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
`

export default App;
