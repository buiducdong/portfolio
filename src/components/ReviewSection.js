import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layout'
import ReviewItem from './ReviewItem'
import Title from './Title'

function ReviewSection() {
  return (
      <ReviewSectionStyled>
        <Title title={'Review'} span={'Review'} />
        <InnerLayout>
          <div className='review'>
            <ReviewItem 
              text={'Lorem ipsum dolor sit amet consectetur adipisicing dlit. Autem tentur ratione quod'}
            />
            <ReviewItem 
              text={'Lorem ipsum dolor sit amet consectetur adipisicing dlit. Autem tentur ratione quod'}
            />
          </div>
        </InnerLayout>
      </ReviewSectionStyled>
  )
}

const ReviewSectionStyled = styled.section`
  .review{
    display: flex;
  }
`

export default ReviewSection
