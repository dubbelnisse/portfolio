import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  margin-bottom: 20px;

  @media print {
    font-size: 10pt;
  }
`

const Employer = styled.h3`
  font-size: 20px;

  @media print {
    font-size: 12pt;
  }
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
    margin-bottom: 15px;
  }
`

const ExperienceLink = styled(Link)`
  @media print {
    display: none;
  }
`

interface Entry {
  employer: string
  position: string
  start: string
  end: string | null
  about: string[]
  link: string | null
}

interface AnExperienceProps {
  experience: Entry
}

const Experience: React.FC<AnExperienceProps> = ({ experience }) => {
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
      {experience.link ? (
        <ExperienceLink to={experience.link}>
          Here's a list what I've been up to @ {experience.employer}
        </ExperienceLink>
      ) : (
        ''
      )}
    </Wrapper>
  )
}

export default Experience
