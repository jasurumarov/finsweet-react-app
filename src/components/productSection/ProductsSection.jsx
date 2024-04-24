import React, {useEffect, useState} from 'react'
import axios from '../../api'
import {Link} from 'react-router-dom'
// IMAGES
import arrow from "../../images/arrow-icon.svg"
// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProductsSection = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios
      .get("/products")
      .then(res => setData(res.data.products))
      .catch(res => console.log(res))
      .finally(() => setLoading(false))
  }, [])

  let product = data
    ?.slice(0, 7)
    .filter((el, i) => i !== 3)
    .map(el => (
      <div key={el.id} className="item products__card">
        <img className="products__card-img" src={el.images[0]} alt="products card img" />
        <div className="products__card-title">
            <h3 title={el.title}>{el.title}</h3>
            <p title={el.description}>{el.description}</p>
            <Link to={"/products"}>Learn More <img src={arrow} alt="arrow icon" /></Link>
        </div>
      </div>
    )
  )

  let loadings = Array(6).fill("")

  let loadingItem = loadings.map((el, i) => (
    <div key={i} className="products__card">
      <article className='products__card-img'></article>
      <div className="products__card-title">
          <h3></h3>
          <p></p>
          <h5></h5>
      </div>
    </div>
  ))

  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000
  };
  return (
    <div className='products-section'>
        <div className="container">
            <div className="products-section__content">
                <h2>All posts</h2>
                <OwlCarousel {...options} className="owl-theme ">
                  <div className="products__cards">
                    {product}
                  </div>
                  <div className="products__cards">
                    {product} 
                  </div>
                  {loading ? <div className='loading'>
                    {loadingItem}
                  </div> : <></>}
                </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default ProductsSection