import React from 'react'
import ExperienceList from '../components/ExperienceList'
import Intro from '../components/Intro'
import SkillsList from '../components/SkillsList'
import Other from '../components/Other'
import EducationList from '../components/EducationList'
import PrintCv from '../components/PrintCv'

const Home = () => {
  return (
    <>
      <Intro />
      <ExperienceList />
      <PrintCv />
      <EducationList />
      <SkillsList />
      <Other />
    </>
  )
}

export default Home
