import Features from '@/Modules/Features/Features'
import Hero from '@/Modules/Hero/Hero'
import LatestBlog from '@/Modules/LatestBlog/LatestBlog'
import Portfolio from '@/Modules/Portfolio/Portfolio'
import Testimonials from '@/Modules/Testimonials/Testimonials'
import TrustedBy from '@/Modules/TrustedBy/TrustedBy'
import React from 'react'

const Home = () => {
  return (
    <div >
      <Hero/>
      <TrustedBy/>
      <Features/>
      <Portfolio/>
      <LatestBlog/>
      <Testimonials/>
    </div>
  )
}

export default Home
