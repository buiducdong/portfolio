import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function HomePage() {
  return (
    <HomePageStyled>
      <div className='typography'>
        <h1>Hi I'm Bronze<span> Full Stack Developer</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem consequuntur animi numquam? Mollitia ad voluptatum voluptates cupiditate ullam impedit tempore iste, corrupti porro blanditiis labore, quos quisquam ducimus maxime?</p>
        <div className="icons">
          <a href='https://www.facebook.com/duc.dong.500' className="icon i-facebook"><FacebookIcon /></a>
          <a href='https://github.com/buiducdong' className="icon i-github"><GitHubIcon /></a>
        </div>
      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh; 
  position: relative;
  .typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    p{
      font-size: 1.4rem;
      margin-top: .5rem;
    }
    .icons{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon{
        border: 1px solid var(--border-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:not(:last-child){
          margin-right: 1rem;
        }
        &:hover{
          color: var(--primary-color);
          border-color: var(--primary-color);
        }
        svg{
          margin: 10px;
        }
      }
      .i-github{
        &:hover{
          color: pink;
          border-color: pink;
        }
      }
    }
  }
`

export default HomePage
