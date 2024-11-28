import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import ProjectsIteam from './routes/projects/Iteam'
import Footer from './components/Footer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr minmax(auto, 960px) 1fr 20px;
`

const Content = styled.div`
  grid-column: 3/4;
`

const App = () => (
  <Wrapper>
    <Content>
      <Routes>
        <Route path="/projects/iteam" element={<ProjectsIteam />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Content>
  </Wrapper>
)

export default App
