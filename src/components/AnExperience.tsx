import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Employer = styled.p`
  font-size: 20px;
`

const TitleAndTime = styled.p`
  color: rgb(199, 199, 199);
`

interface Entry {
  employer: string
  position: string
  start: string
  end: string | null
  about: string
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
      <p>{experience.about}</p>
    </Wrapper>
  )
}

export default AnExperience
