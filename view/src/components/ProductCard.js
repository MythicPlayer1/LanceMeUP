import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ShowItem.css'
import { ProductContext } from './UserContext';


const ProductCard = (props) => {

   
    
    const {cartItem, setcartItem }=useContext(ProductContext)
    const {name, price, des, img}=props
    const productClick= async ()=>{

        await fetch('http://localhost:3500/orderItem',{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({
                name:name,
                price:price,
                des:des,
                img:img
            })      
          }).then((res)=>res.json()).then((data)=>{
              setcartItem(data)
          });



        // const newarry1=[...cartItem]

        // const data={   
        //     id:props.id,
        //     img:props.img,
        //     name:props.name,
        //     des:props.des,
        //     price:props.price
        // }
        // newarry1.push(data)
        // setcartItem(newarry1)     
    }


    return (

        <div className="product-card" >
            <div className="product-image">

                {/* <Link to="/product=id" onClick={() => props.handleProductClick('event', props.productItem.id)}>
                    <img src={process.env.PUBLIC_URL + props.image.imageUrl} className="product-thumb" alt="" />
                </Link> */}
                <Link><img src={props.img} className="product-thumb" ></img></Link>

                <button className="card-btn" onClick={productClick}>Add To Cart</button>
            </div>
            <div className="product-info">
                <h3 className="product-brand">{props.name}</h3>
                <p className="product-short-des">{props.des}</p>
                <span className="price">NRs. {props.price}</span>
            </div>
        </div>

    )
}

export default ProductCard