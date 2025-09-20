import React from 'react'
import Hero from './Hero/Hero'
import ResponsiveNav from './Navbar/ResponsiveNav'
import Services from './Hero/Services/Services'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import About from './About/About'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
    </div>
  )
}

export default Home