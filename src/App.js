import React from 'react'
import SectionHome from './sections/Home'
import SectionStack from './sections/Stack'
import SectionProjects from './sections/Projects'
import SectionContact from './sections/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <SectionHome />
      <SectionProjects />
      <SectionContact />
    </>
  )
}
