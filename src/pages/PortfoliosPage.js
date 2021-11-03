import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import Title from '../components/Title'
import portfolios from '../data/portfolios'
import { ContainerLayout, InnerLayout } from '../style/Layout'
import Button from '../components/Button'

function PortfoliosPage() {
  const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]
  useEffect(() => {
    
  }, [])
  const [menuItem, setMenuItem] = useState(portfolios)
  const [button, setButton] = useState(allButtons)
  const filter = (button) => {
    if(button === 'All') {
      setMenuItem(portfolios)
      return
    }
    const filteredData = portfolios.filter(item => item.category === button)
    setMenuItem(filteredData)
  }
  return (
    <ContainerLayout>
      <Title title={'Portfolios'} span={'Portfolios'}/>
      <InnerLayout>
        <Button filter={filter} button={button}></Button>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </ContainerLayout>
  )
}

export default PortfoliosPage
