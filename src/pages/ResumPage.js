import React from 'react'
import styled from 'styled-components'
import Resum from '../components/Resum'
import Skills from '../components/Skills'
import { ContainerLayout } from '../style/Layout'

function ResumPage() {
  return (
    <ContainerLayout>
      <ResumPageStyled>
        <Skills></Skills>
        <Resum></Resum>
      </ResumPageStyled>
    </ContainerLayout>
  )
}

const ResumPageStyled = styled.div`

`

export default ResumPage
