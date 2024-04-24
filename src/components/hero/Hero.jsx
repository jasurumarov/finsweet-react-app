import React from 'react'
import circle from "../../images/Circle.svg"

const Hero = (props) => {
    console.log(props);
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero-section__content">
                <div className="hero-left">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <button>{props.btn}</button>
                </div>
                <div className="hero-right">
                    <img src={props.img} alt="hero img" />
                    <div></div>
                    <img src={circle} alt="circle icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero