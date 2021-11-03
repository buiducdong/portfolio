import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

export default function Sidebar({navToggle}) {
  return (
    <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  position: fixed;
  width: 16rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all .3s ease-in-out;

  //1023px
  @media screen and (max-width: 1023px){
    transform: translateX(-100%);
    transition: all .3s ease-in-out;
    z-index: 5;
  }
`

