import React from 'react'
import {Link} from 'react-router-dom'
// IMAGES
import BlogImg1 from "../../images/blog1.png"
import BlogImg2 from "../../images/blog2.png"
import BlogImg3 from "../../images/blog3.png"
import arrow from "../../images/arrow-icon.svg"

const Blog = () => {
  return (
    <div className='blog-section'>
        <div className="container">
            <div className="blog-section__content">
                <h2>Latest Blog & News</h2>
                <div className="blog__cards">
                    <div className="blog__card">
                        <img className='blog__card-img' src={BlogImg1} alt="blog card img" />
                        <div className="blog__card-title">
                            <h3>Why you have to digitalize in 2021</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <Link to={"/blog"}>Learn More <img src={arrow} alt="arrow icon" /></Link>
                        </div>
                    </div>
                    <div className="blog__card">
                        <img className='blog__card-img' src={BlogImg2} alt="blog card img" />
                        <div className="blog__card-title">
                            <h3>Our internal process and longerm vision</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <Link to={"/blog"}>Learn More <img src={arrow} alt="arrow icon" /></Link>
                        </div>
                    </div>
                    <div className="blog__card">
                        <img className='blog__card-img' src={BlogImg3} alt="blog card img" />
                        <div className="blog__card-title">
                            <h3>Helping the next generation of leaders</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <Link to={"/blog"}>Learn More <img src={arrow} alt="arrow icon" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog