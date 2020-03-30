import React from 'react'
import projects from '../../data/iteam-projects'
import Project from '../../components/Project'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
`

const Iteam = () => {
  return (
    <Wrapper>
      <h1>Projects @ Iteam</h1>
      {projects.map((project, i) => (
        <Project key={`project-${i}`} project={project} />
      ))}
    </Wrapper>
  )
}

export default Iteam
