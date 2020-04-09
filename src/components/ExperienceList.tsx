import React from 'react'
import data from '../data/experience'
import Experience from './Experience'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
`

const H2 = styled.h2`
  margin: 30px 0;

  @media print {
    font-size: 14pt;
  }
`

const ExperienceList = () => {
  return (
    <Wrapper>
      <H2>Experience</H2>
      {data.map((entry, i) => (
        <Experience key={`experience-${i}`} experience={entry} />
      ))}
    </Wrapper>
  )
}

export default ExperienceList
