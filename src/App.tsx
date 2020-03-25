import React from 'react'
import styled from 'styled-components'
import Experience from './components/Experience'
import Intro from './components/Intro'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr minmax(auto, 960px) 1fr 20px;
`

const Content = styled.div`
  grid-column: 3/4;
`

const App = () => {
  return (
    <Wrapper>
      <Content>
        <Intro />
        <Experience />
      </Content>
    </Wrapper>
  )
}

export default App
