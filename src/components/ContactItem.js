import React from 'react'
import styled from 'styled-components'

function ContactItem({icon, title, contact1, contact2}) {
  return (
    <ContactItemStyled>
      <div className='left-content'>
        <p>
          {icon}
        </p>
      </div>
      <div className='right-content'>
        <h4>{title}</h4>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  )
}

const ContactItemStyled = styled.div`
  padding: 1rem 2rem;
  background-color: var(--background-dark-gray);
  display: flex;
  align-items: center;
  &:not(:last-child){
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 390px){
    padding: 1rem .5rem;
  }
  .left-content{
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    @media screen and (max-width: 480px){
    padding: .4rem;
    margin-right: 1rem;
  }
    svg{
      font-size: 2.2rem;
    }
  }
  .right-content{
    h4{
      color: var(--white-color);
      padding-bottom: .5rem;
    }
  }
`

export default ContactItem
