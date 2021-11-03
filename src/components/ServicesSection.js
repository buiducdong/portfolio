import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../style/Layout'
import Title from './Title'
import ServicesCard from './ServicesCard'

function ServicesSection() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const image1 = '../images/video-game (1).png'
  const image2 = '../images/artificial-intelligence.png'
  const image3 ='../images/web-design.png'
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'Services'}/>
        <div className='services'>
          <ServicesCard 
            image={image1}
            title={'Game Development'}
            paragraphy={'Lorem ipsum dolor sit amet consectetur adipisicing dlit. Autem tentur ratione quod'}/>
          <ServicesCard 
            image={image2}
            title={'Artificial Intellgence'}
            paragraphy={'Lorem ipsum dolor sit amet consectetur adipisicing dlit. Autem tentur ratione quod'}/>
          <ServicesCard 
            image={image3}
            title={'Web Design'}
            paragraphy={'Lorem ipsum dolor sit amet consectetur adipisicing dlit. Autem tentur ratione quod'}/>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  )
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 4rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  }
`

export default ServicesSection
