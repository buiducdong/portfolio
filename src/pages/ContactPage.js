import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import { ContainerLayout, InnerLayout } from '../style/Layout'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ContactItem from '../components/ContactItem'
import PhoneIcon from '@material-ui/icons/Phone'

function ContactPage() {
  return (
    <ContainerLayout>
      <ContactPageStyled>
        <Title title={'Contact'} span={'Contact'}/>
        <InnerLayout className={'contact-section'}>
          <div className='left-content'>
            <div className='left-title'>
              <h4>Get In Touch</h4>
            </div>
            <form className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter your name</label>
                <input type='text' id='name'></input>
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter your email</label>
                <input type='email' id='email'></input>
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Enter your subject</label>
                <input type='text' id='subject'></input>
              </div>
              <div className='form-field'>
                <label htmlFor='textarea'>Enter your message</label>
                <textarea name='textarea' id='textarea' cols='30' rows='10'></textarea>
              </div>
              <div className='form-field f-button'>
                <PrimaryButton title={'Send Email'}></PrimaryButton>
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem 
              icon={<PhoneIcon />}
              title={'Phone'}
              contact1={'097-687-0237'}
              contact2={'....'}
            />
            <ContactItem 
              icon={<EmailIcon />}
              title={'Email'}
              contact1={'dongbuiduc620@gmail.com'}
              contact2={'....'}
            />
            <ContactItem 
              icon={<LocationOnIcon />}
              title={'Location'}
              contact1={'VietNam'}
              contact2={'....'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </ContainerLayout>
  )
}

const ContactPageStyled = styled.section`
  .contact-section{
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 880px){
      grid-template-columns: repeat(1, 1fr);
    }
    .right-content{
      display: flex;
      flex-direction: column;
    }
    .left-title{
      h4{
        color: var(--white-color);
        font-size: 2rem;
        padding-bottom: 3rem;
      }
    }
    .form{
      width: 100%;
      @media screen and (max-width: 490px){
        width: 90%;
      }
      .form-field{
        position: relative;
        margin-top: .2rem;
        width: 100%;
        &:not(:last-child){
            margin-bottom: 1rem;
          }
        label{
          position: absolute;
          top: -10px;
          left: 10px;
          display: inline;
          padding: 2px 6px;
          background-color: var(--background-dark-color);
        }
        input{
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 40px;
          color: inherit;
          font-size: 1rem;
          width: 100%;
          padding: 1rem 1rem;
        }
        textarea{
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          font-size: 1rem;
          padding: 1rem;
          width: 100%;
        }
      }
      .f-button{
        margin-bottom: 1rem;
      }
    }
  }
`

export default ContactPage
