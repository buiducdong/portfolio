import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import blogs from '../data/blogs'
import { ContainerLayout, InnerLayout } from '../style/Layout'

function BlogsPage() {
  return (
    <ContainerLayout>
        <BlogsStyled>
        <Title title={'Blogs'} span={'Blogs'}/>
        <InnerLayout className={'blog'}>
          {
            blogs.map((blog, index) => {
              return (
                <div key={index} className='blog-item'>
                  <div className='image'>
                    <img src={blog.image} alt='girl'></img>
                  </div>
                  <div className='title'>
                    <a href={blog.link}>
                      {blog.title}
                    </a>
                  </div>
                </div>
              )
            })
          }
        </InnerLayout>
      </BlogsStyled>
    </ContainerLayout>
  )
}

const BlogsStyled = styled.div`
  .blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item{
      padding: 1rem 1rem 0 1rem;
      background-color: var(--background-dark-gray);
      .image{
        width: 100%;
        overflow: hidden;
        img{
          width: 100%;
          object-fit: cover;
          transition: all .3s ease-in-out;
          &:hover{
            transform: rotate(5deg) scale(1.2);
          }
        }
      }
      .title{
        a{
          color: var(--white-color);
          font-size: 1.6rem;
          transition: all .3s ease-in-out;
          &:hover{
            color: var(--primary-color);
          }
        }
      }
    }
  }
`

export default BlogsPage
