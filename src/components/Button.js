import React from 'react'
import styled from 'styled-components';

function Button({filter, button}) {
  const handleFilter = (bt) => {
    filter(bt);
  }
  return (
    <ButtonStyled>
      {
        button.map((bt, i) => {
          return (
            <button key={i}
              onClick={() => handleFilter(bt)}>
              {bt}
            </button>
          )
        })
      }
    </ButtonStyled>
  )
}

const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  margin: 2rem auto;
  padding: 0 1rem;
  button{
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .5rem 2rem;
    font-size: inherit;
    cursor: pointer;
    color: var(--white-color);
    transition: all .3s ease-in-out;
    &:focus, &:active{
      background-color: var(--primary-color);
    }
    &:not(:last-child){
      margin-right: 1rem;
    }
    &:hover{
      background-color: var(--primary-color);
    }
  }
`

export default Button
