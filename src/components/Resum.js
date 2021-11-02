import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layout'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumItem from './ResumItem'

function Resum() {
  return (
    <Resumstyled>
      <Title title={'Resum'} span={'Resum'}/>
      <InnerLayout>
        <div className='resum'>
          <div className='smallTitle'>
            <SmallTitle icon={<BusinessCenterIcon />} title={'Working Experince'}></SmallTitle>
          </div>
          <div className='resum-content'>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
          </div>
        </div>
        <div className='resum'>
          <div className='smallTitle'>
            <SmallTitle icon={<SchoolIcon />} title={'Working Experince'}></SmallTitle>
          </div>
          <div className='resum-content'>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
            <ResumItem 
              year={'2018-2022'}
              title={'Computer Science'}
              subTitle={'Sussex University'}
              text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quam eligendi? Cumque dolorem tempora, repudiandae a nemo voluptatibus.'}>
            </ResumItem>
          </div>
        </div>
      </InnerLayout>
    </Resumstyled>
  )
}

const Resumstyled = styled.div`
  .resum{
    &:not(:last-child){
      padding-bottom: 5rem;
    }
  }
  .smallTitle{
    padding-bottom: 2rem;
  }
  .resum-content{
    border-left: 2px solid var(--border-color);
  }
`

export default Resum
