import React from 'react'
import data from '../data/skills'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  max-width: 600px;
  font-size: 10pt;

  @media print {
    display: block;
  }
`

const H2 = styled.h2`
  margin: 30px 0;
  font-size: 14pt;
`

const Skills = styled.ul`
  padding: 0;
  list-style: none;
  margin: 5mm 0 0 0;

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

    @media print {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
    }
  }
`

const SkillsList = () => {
  return (
    <Wrapper>
      <H2>Skills</H2>
      <p>A selection of skills I know.</p>
      <Skills>
        {data.map((skill, i) => (
          <li key={`experience-${i}`}>{skill}</li>
        ))}
      </Skills>
    </Wrapper>
  )
}

export default SkillsList
