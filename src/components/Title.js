import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
  return (
    <TitleStyled>
      <h2>
        {title}<span>{span}</span>
      </h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  position: relative;
  h2{
    color: var(--white-color);
    font-size: 3.5rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 4px;
    &::before{
      content: '';
      width: 8rem;
      height: .33rem;
      position: absolute;
      bottom: 0;
      background-color: var(--background-light-color-2)
    }
    &::after{
      content: '';
      width: 3rem;
      height: .33rem;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 1rem;
      background-color: var(--primary-color)
    }
    span{
      position: absolute;
      font-weight: 600;
      color: rgba(25, 29, 43, .44);
      left: 2%;
      top: 20%;
      font-size: 5rem;
      z-index: -1;
    }
  }
`

export default Title
