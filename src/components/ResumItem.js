import React from 'react'
import styled from 'styled-components'


function ResumItem({year, title, subTitle, text}) {
  return (
      <ResumItemStyled>
        <div className='left-content'>
          <p>{year}</p>
        </div>
        <div className='right-content'>
          <h5>{title}</h5>
          <h6>{subTitle}</h6>
          <p>{text}</p>
        </div>
      </ResumItemStyled>
  )
}

const ResumItemStyled = styled.div`
  display: flex;
  &:not(:last-child){
    padding-bottom: 2rem;
  }
  .left-content{
    width: 30%;
    padding-left: 20px;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      left: -1px;
      transform: translateX(-50%);
      top: 4px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
    }
    p{
      display: inline-block;
    }
  }
  .right-content{
    padding-left: 5rem;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5{
      color: var(--primary-color);
      font-size: 1.8rem;
      padding-bottom: .4rem;
    }
    h6{
      padding-bottom: 0.5rem;
      font-size: 1.2rem;
    }
  }
`
export default ResumItem
