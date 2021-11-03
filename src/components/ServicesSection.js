import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../style/Layout'
import Title from './Title'
import ServicesCard from './ServicesCard'
import image1 from  '../images/video-game (1).png'
import image2 from  '../images/artificial-intelligence.png'
import image3 from  '../images/web-design.png'

function ServicesSection() {
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
