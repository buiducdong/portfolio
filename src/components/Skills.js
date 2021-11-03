import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layout'
import ProgressBar from './ProgressBar'
import Title from './Title'

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'My Skills'}></Title>
      <InnerLayout>
        <div className='skills'>
          <ProgressBar 
            title={'HTML5'} 
            width={'90%'}
            text={'90%'}>
          </ProgressBar>
          <ProgressBar 
            title={'CSS3'} 
            width={'80%'}
            text={'80%'}>
          </ProgressBar>
          <ProgressBar 
            title={'JAVASCRIPT'} 
            width={'75%'}
            text={'75%'}>
          </ProgressBar>
          <ProgressBar 
            title={'NODEJS'} 
            width={'50%'}
            text={'50%'}>
          </ProgressBar>
          <ProgressBar 
            title={'MONGODB'} 
            width={'50%'}
            text={'50%'}>
          </ProgressBar>
          <ProgressBar 
            title={'REACT JS'} 
            width={'70%'}
            text={'70%'}>
          </ProgressBar>
        </div>
      </InnerLayout>
    </SkillsStyled>
  )
}

const SkillsStyled = styled.div`
  .skills{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Skills
