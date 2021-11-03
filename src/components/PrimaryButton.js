import React from 'react'
import styled from 'styled-components'

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 1rem 2.5rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all .3s ease-in-out;
  &::after{
    content: '';
    position: absolute;
    width: 0;
    height: 15%;
    left: 0;
    bottom: 0;
    background-color: var(--white-color);
    transition: all .3s ease-in-out;
    opacity: 0;
  }
  &:hover::after{
    width: 100%;
    transition: all .3s ease-in-out;
    opacity: 1;
  }
`

export default PrimaryButton
