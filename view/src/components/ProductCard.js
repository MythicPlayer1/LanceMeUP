import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ShowItem.css'
import { ProductContext } from './UserContext';


const ProductCard = (props) => {
    
    const {cartItem, setcartItem }=useContext(ProductContext)
    const productClick=()=>{
        const data={   
            id:props.id,
            img:props.image,
            name:props.name,
            des:props.desc,
            price:props.price
        }
        setcartItem([data])     
    }


    return (

        <div className="product-card" >
            <div className="product-image">

                {/* <Link to="/product=id" onClick={() => props.handleProductClick('event', props.productItem.id)}>
                    <img src={process.env.PUBLIC_URL + props.image.imageUrl} className="product-thumb" alt="" />
                </Link> */}
                <Link><img src={props.image} className="product-thumb" ></img></Link>

                <button className="card-btn" onClick={productClick}>Add To Cart</button>
            </div>
            <div className="product-info">
                <h3 className="product-brand">{props.name}</h3>
                {/* <p className="product-short-des">{props.description}</p> */}
                <span className="price">NRs. {props.price}</span>
            </div>
        </div>

    )
}

export default ProductCard