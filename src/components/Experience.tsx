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

const PrintProjects = styled.div`
  display: none;

  @media print {
    display: block;
  }
`

const ProjectsHeading = styled.p`
  font-weight: bold;
  margin: 4mm 0 4mm 0;
  break-after: avoid;
`

const ProjectList = styled.ul`
  padding: 0 0 0 4mm;
  list-style: none;
  margin: 0;
  border-left: 2px solid rgb(220, 220, 220);

  li {
    break-inside: avoid;
    margin-bottom: 3mm;
  }

  p {
    margin: 0;
  }
`

const ProjectName = styled.p`
  font-weight: bold;
`

const Techniques = styled.p`
  color: rgb(120, 120, 120);
`

interface Project {
  name: string
  role: string
  start: string
  end: string | null
  description: string
  techniques: string[]
}

interface Entry {
  employer: string
  position: string
  start: string
  end: string | null
  about: string[]
  link: string | null
  projects?: Project[]
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
      {experience.projects ? (
        <PrintProjects>
          <ProjectsHeading>
            Client projects as a consultant at {experience.employer}
          </ProjectsHeading>
          <ProjectList>
            {experience.projects.map((project, i) => (
              <li key={`project-${i}`}>
                <ProjectName>
                  {project.name} | {project.role} | {project.start}
                  {project.end ? ` - ${project.end}` : ''}
                </ProjectName>
                <p>{project.description}</p>
                <Techniques>{project.techniques.join(', ')}</Techniques>
              </li>
            ))}
          </ProjectList>
        </PrintProjects>
      ) : (
        ''
      )}
    </Wrapper>
  )
}

export default Experience
