import React from 'react'
import Blog from '../../components/blog/Blog'
import Hero from '../../components/hero/Hero'
// IMAGES
import HeroImg from "../../images/hero3.png"

const Careers = () => {
  return (
    <div className='careers-page'>
      <Hero title={"We hired people who are very passionate about what they do"} desc={"Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw."} btn={"Work With Us"} img={HeroImg}/>
      <Blog/>
    </div>
  )
}

export default Careers