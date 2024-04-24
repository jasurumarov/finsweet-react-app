import React from 'react'
import HomeHero from '../../components/homeHero/HomeHero'
import Blog from '../../components/blog/Blog'

const Home = () => {
  return (
    <div className='home-page'>
        <HomeHero/>
        <Blog/>
    </div>
  )
}

export default Home