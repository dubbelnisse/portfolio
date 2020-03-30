import React from 'react'
import data from '../data/experience'
import AnExperience from './AnExperience'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
`

const H2 = styled.h2`
  margin: 30px 0;
`

const Experience = () => {
  return (
    <Wrapper>
      <H2>Experience</H2>
      {data.map((entry, i) => (
        <AnExperience key={`experience-${i}`} experience={entry} />
      ))}
    </Wrapper>
  )
}

export default Experience
