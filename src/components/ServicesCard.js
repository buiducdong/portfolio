import React from 'react'
import styled from 'styled-components'


function ServicesCard({image, title, paragraphy}) {
  return (
    <ServicesCardStyled >
      <div className='container'>
        <img src={image} alt='img'></img>
        <h4>{title}</h4>
        <p>{paragraphy}</p>
      </div>
    </ServicesCardStyled>
  )
}

const ServicesCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  .container{
    background-color: var(--background-dark-gray);
    padding: 1.2rem;
    border: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    transition: all .3s ease-in-out;
    &:hover{
    border-top: 8px solid var(--primary-color);
    transform: translateY(4px);
    }
    h4{
      color: var(--white-color);
      padding: .6rem 0;
      margin: .5rem 0;
      font-size: 1.6rem;
      position: relative;
      &::after{
        content: '';
        width: 3rem;
        background-color: var(--border-color);
        height: 4px;
        left: 0;
        bottom: 0;
        border-radius: 1rem;
        position: absolute;
      }
    }
  }
`

export default ServicesCard
