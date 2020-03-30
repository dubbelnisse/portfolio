import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Employer = styled.h3`
  font-size: 20px;
`

const TitleAndTime = styled.p`
  color: rgb(61, 61, 61);
  font-weight: bold;
`

const About = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 30px;
  }
`

interface Entry {
  employer: string
  position: string
  start: string
  end: string | null
  about: string[]
}

interface AnExperienceProps {
  experience: Entry
}

const AnExperience: React.FC<AnExperienceProps> = ({ experience }) => {
  return (
    <Wrapper>
      <Employer>{experience.employer}</Employer>
      <TitleAndTime>
        {experience.position} | {experience.start} -{' '}
        {experience.end ? experience.end : 'Present'}
      </TitleAndTime>
      <About>
        {experience.about.map((paragraph, i) => (
          <li key={`about-${i}`}>{paragraph}</li>
        ))}
      </About>
    </Wrapper>
  )
}

export default AnExperience
