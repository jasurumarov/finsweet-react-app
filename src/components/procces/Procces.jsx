import React from 'react'
// IMAGES
import ProfileImg from "../../images/profile.png"
import ArrowIcon from "../../images/arrow-icon.svg"
import BlogHeroImg from "../../images/blogHero.png"

const Procces = () => {
  return (
    <div className='procces-section'>
        <div className="container">
            <div className="procces-section__content">
                <div className="procces-section__title">
                    <div className="procces-section__title-profile">
                        <div>
                            <img src={ProfileImg} alt="profile img" />
                            <p>Andrew Jonson</p>
                        </div>
                        <p>Posted on 27th January 2021</p>
                    </div>
                    <h3>Our internal process and longerm vision</h3>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</h5>
                    <button>Read More <img src={ArrowIcon} alt="" /></button>
                </div>
                <img className='procces-section__img' src={BlogHeroImg} alt="blog hero img" />
            </div>
        </div>
    </div>
  )
}

export default Procces