import Features from '@/Modules/Features/Features'
import Hero from '@/Modules/Hero/Hero'
import TrustedBy from '@/Modules/TrustedBy/TrustedBy'
import React from 'react'

const Home = () => {
  return (
    <div >
      <Hero/>
      <TrustedBy/>
      <Features/>
    </div>
  )
}

export default Home
