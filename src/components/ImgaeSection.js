import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import girl1 from '../images/girl-1.png'

function ImgaeSection() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <img src={girl1} alt='girl-1'></img>
      </div>
      <div className='right-content'>
        <div className='sub-title'>
          <h4>I am <span>Bronze </span></h4>
        </div>
        <p className='paragraphy'>
          huh  ahfj afsd a fksdj a jfsd a dj ajk jasj aj lljj jsd lorem imps lorem ad hi not you has completed
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Laguages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className='info'>
            <p>: Bronzeeee</p>
            <p>: 21</p>
            <p>: Viet Nam</p>
            <p>: VietNamese, English</p>
            <p>: Viet Nam</p>
            <p>: Freelancer</p>
          </div>
        </div>
      <PrimaryButton title ={'Download CV'}/>
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  @media screen and (max-width: 1023px){
    flex-direction: column;
  }
  .left-content{
    width: 100%;
    img{
      width: 80%;
      object-fit: cover;
    }
  }
  .right-content{
    width: 100%;
    h4{
      font-size: 2rem;
      color: var(--white-color);
      span{
        font-size: 2rem;
      }
    }
    .paragraphy{
      padding: 1rem 0;
    }
    .about-info{
      display: flex;
      padding-bottom: 1rem;
      .info-title{
        padding-right: 2rem;
        p{
          font-weight: 600;
        }
      }
      .info-title, .info{
        p{
          padding: .4rem 0;
        }
      }
    }
  }
`

export default ImgaeSection
