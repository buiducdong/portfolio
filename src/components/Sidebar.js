import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  position: fixed;
  width: var(--width-sidebar);
  height: 100vh;
  background-color: var(--sidebar-dark-color);
`

