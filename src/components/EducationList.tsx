import React from 'react'
import data from '../data/education'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  max-width: 600px;
  font-size: 10pt;
  margin-top: 30mm;

  @media print {
    display: block;
  }
`

const H2 = styled.h2`
  margin: 30px 0;
  font-size: 14pt;
`

const SchoolName = styled.h3`
  font-size: 12pt;
  margin-bottom: 0;
`

const EducationAndPeriod = styled.p`
  color: rgb(61, 61, 61);
  margin: 1mm 0;
`

const EducationList = () => {
  return (
    <Wrapper>
      <H2>Educations</H2>
      {data.map((education, i) => (
        <div key={`education-${i}`}>
          <SchoolName>{education.school}</SchoolName>
          <EducationAndPeriod>
            {education.education} | {education.start} - {education.end}
          </EducationAndPeriod>
        </div>
      ))}
    </Wrapper>
  )
}

export default EducationList
