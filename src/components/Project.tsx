import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;

  &:not(:last-of-type) {
    border-bottom: 1px dashed rgb(235, 235, 235);
  }
`

const Employer = styled.h3`
  font-size: 20px;
`

const TitleAndTime = styled.p`
  color: rgb(61, 61, 61);
  font-weight: bold;
`

const Techniques = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    color: rgb(77, 77, 77);
    padding: 5px 15px;
    display: inline-block;
    margin-bottom: 10px;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`

interface Project {
  name: string
  role: string
  start: string
  end: string | null
  description: string
  techniques: string[]
}

interface ProjectProps {
  project: Project
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Wrapper>
      <Employer>{project.name}</Employer>
      <TitleAndTime>
        {project.role} | {project.start}{' '}
        {project.end ? ` - ${project.end}` : ''}
      </TitleAndTime>
      <p>{project.description}</p>
      <Techniques>
        {project.techniques.map((technique, i) => (
          <li key={`technique-${i}`}>{technique}</li>
        ))}
      </Techniques>
    </Wrapper>
  )
}

export default Project
