import React from 'react'
import Blog from '../../components/blog/Blog'
import Hero from '../../components/hero/Hero'
// IMAGES
import HeroImg from "../../images/hero2.png"

const Services = () => {
  return (
    <div className='services-page'>
        <Hero title={"We serve clients with ground breaking solutions"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."} btn={"Work With Us"} img={HeroImg}/>
        <Blog/>
    </div>
  )
}

export default Services