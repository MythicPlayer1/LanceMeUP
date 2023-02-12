import React, { useState } from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import '../components/CartItems.css'




const Cart = (props) => {
    console.log(props.cartProduct)
    const data=props.cartProduct;


  return (
    <div>
        <Header></Header>
        <h1 style={{marginLeft:'35px',}}>Shopping cart</h1>
        <div className='cart'>
            {
               data && data.map((item)=>(
                    <CartItems
                        item={item} ></CartItems>
                ))
            }
            {/* <CartItems
                name={data[0].name}
                image={data[0].img}
                price={data[0].price}
                description={data[0].des}
            ></CartItems> */}
            
        </div>
        <div style={{width:'100%',display:"flex",justifyContent:'center',marginTop:'10px',alignItems:'center'}}><button className='btn' style={{borderRadius:'5px'}} >Checkout</button> <h3 style={{marginLeft:'25px'}}>Total Price:</h3></div>
        
       

    </div>
  )
}

export default Cart