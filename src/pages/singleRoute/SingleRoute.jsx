import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api'
// IMAGES 
import Rating from '../../images/rating.png'

const SingleRoute = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`products/${id}`)
    .then(res => setProduct(res.data))
    .catch(res => console.log(res))
  }, [])

  return (
    <div className='singleRoute-page'>
      <div className="container">
        <div className="singleRoute__content">
          <img src={product?.thumbnail} alt="product image" />
          <div className='singleRoute__title'>
            <div className='singleRoute__title--images'>
              <img src={product?.images[0]} alt="" />
              <img src={product?.images[1]} alt="" />
              <img src={product?.images[2]} alt="" />
            </div>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <div className='singleRoute__title--rating'>
              <img src={Rating} alt="rating" />
              <p>({product?.rating})</p>
            </div>
            <h5>Brand: <span>{product?.brand}</span></h5>
            <h5>Stock: <span>{product?.stock}</span></h5>
            <div className="singleRoute__title--prices">
              <h4>{product?.price}$</h4>
              <p><del>{product?.price - 100}$</del></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRoute