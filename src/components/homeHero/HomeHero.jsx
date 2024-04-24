import React from 'react'
import {Link} from "react-router-dom"
// IMAGES
import homeCompany1 from "../../images/home-company1.svg"
import homeCompany2 from "../../images/home-company1.svg"
import homeCompany3 from "../../images/home-company1.svg"
import homeHeroImg from "../../images/homeHero.png"

const HomeHero = () => {
  return (
    <div className='homeHero-section'>
        <div className="container">
            <div className="homeHero__content">
                <div className="home__hero-left">
                    <h1>Prosper with our bespoke solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <div className='home__hero-btns'>
                        <Link to={"/services"}>See our services</Link>
                        <Link to={"/services"}>See All Services</Link>
                    </div>
                    <h5>Worked with 100+ Companies</h5>
                    <div className="home__hero-companies">
                        <img src={homeCompany1} alt="company icon" />
                        <img src={homeCompany2} alt="company icon" />
                        <img src={homeCompany3} alt="company icon" />
                    </div>
                </div>
                <img className='home__hero-right' src={homeHeroImg} alt="hero img" />
            </div>
        </div>
    </div>
  )
}

export default HomeHero