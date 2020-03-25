import React from 'react'
import data from '../data/experience'
import AnExperience from './AnExperience'

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {data.map((entry, i) => (
        <AnExperience key={`experience-${i}`} experience={entry} />
      ))}
    </div>
  )
}

export default Experience
