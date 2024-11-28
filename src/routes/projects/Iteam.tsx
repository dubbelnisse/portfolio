import projects from '../../data/iteam-projects'
import Project from '../../components/Project'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  max-width: 600px;
`

const NavigateBack = styled(Link)`
  display: block;
  margin: 20px 0;
`

const Iteam = () => {
  return (
    <Wrapper>
      <NavigateBack to="/">&#8592; Back</NavigateBack>
      <h1>Projects @ Iteam</h1>
      {projects.map((project, i) => (
        <Project key={`project-${i}`} project={project} />
      ))}
    </Wrapper>
  )
}

export default Iteam
