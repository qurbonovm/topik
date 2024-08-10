import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import Academy from './Components/Academy/Academy'
import Slider from './Components/Slider/Slider'
import Grant from './Components/Grant/Grant'
import Gradute from './Components/Gradute/Gradute'
import Course from './Components/Course/Course'

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Academy/>
      <Slider/>
      <Grant/>
      <Gradute/>
      <Course/>
    </div>
  )
}

export default App