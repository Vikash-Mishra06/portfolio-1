import React from 'react'
import Hero from './Hero/Hero'
import ResponsiveNav from './Navbar/ResponsiveNav'
import Services from './Hero/Services/Services'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import TechStackAnimation from '../TechStackAnimation'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <TechStackAnimation />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home