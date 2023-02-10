import React from 'react'
import { Link } from 'react-router-dom'
import './ShowItem.css'


const ProductCard = (props) => {
    console.log(props.productItem)
    return (

        <div className="product-card" >
            <div className="product-image">

                {/* <Link to="/product=id" onClick={() => props.handleProductClick('event', props.productItem.id)}>
                    <img src={process.env.PUBLIC_URL + props.productItem.imageUrl} className="product-thumb" alt="" />
                </Link> */}
                <Link><img src='images/logo.png'></img></Link>

                <button className="card-btn" onClick={() => props.handleAddToCart('event', props.productItem)}>Add To Cart</button>
            </div>
            <div className="product-info">
                <h3 className="product-brand">{props.productItem.name}</h3>
                {/* <p className="product-short-des">{props.description}</p> */}
                <span className="price">NRs. {props.productItem.price}</span>
            </div>
        </div>

    )
}

export default ProductCard