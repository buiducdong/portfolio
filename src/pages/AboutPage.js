import React from 'react'
import { ContainerLayout } from '../style/Layout'
import styled from 'styled-components'
import Title from '../components/Title'
import ImgaeSection from '../components/ImgaeSection'
import ServicesSection from '../components/ServicesSection'
import ReviewSection from '../components/ReviewSection'

function AboutPage() {
  return (
    <ContainerLayout>
      <AboutPageStyled>
        <Title title={'About me'} span={'About me'} />
        <ImgaeSection />
        <ServicesSection />
        <ReviewSection />
      </AboutPageStyled>
    </ContainerLayout>
  )
}

const AboutPageStyled = styled.section`

`

export default AboutPage
