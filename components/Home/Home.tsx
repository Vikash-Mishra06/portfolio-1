import React from 'react'
import Hero from './Hero/Hero'
import ResponsiveNav from './Navbar/ResponsiveNav'
import Services from './Hero/Services/Services'
import Resume from './Hero/Resume/Resume'
import Projects from './Projects/Projects'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Resume />
      <Projects />
    </div>
  )
}

export default Home