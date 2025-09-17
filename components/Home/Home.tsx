import React from 'react'
import Hero from './Hero/Hero'
import ResponsiveNav from './Navbar/ResponsiveNav'
import Services from './Hero/Services/Services'
import Resume from './Hero/Resume/Resume'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Resume />
    </div>
  )
}

export default Home