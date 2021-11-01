import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <NavigaionStyled>
      <div className='avatar'>
        <img src={PF + 'images/avatar.jpg'} alt='avatar'/>
      </div>
      <ul className='nav-items'>
        <li className='nav-item'>
          <NavLink to='/' activeClassName='active-class' exact>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' activeClassName='active-class' exact>About</NavLink> 
        </li>
        <li className='nav-item'>
          <NavLink to='/resum' activeClassName='active-class' exact>Resum</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/portfolios' activeClassName='active-class' exact>Portfolios</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/blogs' activeClassName='active-class' exact>Blogs</NavLink> 
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' activeClassName='active-class' exact>Contact</NavLink> 
        </li>
      </ul>
      <footer className='footer'>
        <p>@2021 My Portfolio Website</p>
      </footer>
    </NavigaionStyled>
  )
}

const NavigaionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .avatar{
    width: 100%;
    padding: 2rem 0;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    img{
      width: 80%;
      border-radius: 50%;
      border: 5px solid var(--border-color);
    }
  }
  .nav-items{
    width: 100%;
    text-align: center;
    .active-class{
      background-color: var(--primary-color);
    }
    li{
      a{
        display: block;
        padding: 1rem 0;
        position: relative;
        font-size: 20px;
        &:hover{
          cursor: pointer;
        }
        &::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background: var(--primary-color);
          height: 50%;
          width: 0;
          opacity: .3;
          transition: all .2s cubic-bezier(.1,.84,.86,.06);
        }
      }
      a:hover::before{
        height: 100%;
        width: 100%;
      }
    }
  }
  .footer{
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid var(--border-color);
  }
`
