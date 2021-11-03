import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'

function Menu({menuItem}) {
  return (
    <MenuStyled>
      {
        menuItem.map((item, index) => {
          return (
            <div key={index} className='grid-item'>
              <div className='portfolio-content'>
                <div className='portfolio-image'>
                  <img src={item.image} alt='sf'/>
                  <ul>
                    <li><a href={item.link1}><GitHubIcon /></a></li>
                    <li><a href={item.link2}><GitHubIcon /></a></li>
                  </ul>
                </div>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          )
        })
      }
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  .grid-item{
    .portfolio-content{
      display: block;
      position: relative;
      padding: 1rem 0;
      img{
          width: 100%;
          height: 40vh;
          object-fit: cover;
        }
      ul{
        display: none;
        transition: all .3s ease-in-out;
      }
      .portfolio-image{
        &::before{
          content: '';
          position: absolute;
          left: 2%;
          top: 10%;
          width: 0;
          height: 0;
          transition: all .3s ease-in-out;
        }
      }
      .portfolio-image:hover{
        ul{
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          li{
            background-color: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .4rem;
            border-radius: 50%;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover{
              background-color: var(--primary-color);
              transition: all .3s ease-in-out;
              svg{
                color: #fff;
              }
            }
            a{
              display: flex;
              align-items: center;
              justify-content: center;
            }
            &:not(:last-child){
              margin-right: 1rem;
            }
          }
          svg{
            font-size: 1.4rem;
          }
          }
        &::before{
            width: calc(100% - 4%);
            height: calc(100% - 22%);
            background-color: white;
            opacity: .6;
            transition: all .3s ease-in-out;
            }
      }
      h6{
        font-size: 1.2rem;
        color: var(--white-color);
      }
    }
  }
`

export default Menu
