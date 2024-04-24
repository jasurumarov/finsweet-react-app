import React from 'react'
import Blog from '../../components/blog/Blog'
import Hero from '../../components/hero/Hero'
import Result from '../../components/result/Result'
import HeroImg from "../../images/hero1.png"

const About = () => {
  return (
    <div className='about-page'>
      <Hero title={"We value human, organizational, and operational intelligence, not just artificial"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."} btn={"Work With Us"} img={HeroImg}/>
      <Result/> 
      <Blog/>
    </div>
  )
}

export default About