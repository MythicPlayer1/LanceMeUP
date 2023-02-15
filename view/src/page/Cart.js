import React, { useContext, useState} from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import '../components/CartItems.css'
import { OrderItemContext, ProductContext } from '../components/UserContext'

const Cart = (props) => {
    const {cartItem, setcartItem}=useContext(ProductContext)
    const {orderItem, setorderItem}=useContext(OrderItemContext)
  

   
    console.log(cartItem)
    const carthandeler=()=>{
       
        setorderItem(cartItem)
        // setorderItems(orderarry) 
        setcartItem('')
       
    }
    console.log(orderItem)
 
   
  return (
    <div>
        <Header></Header>
        <h1 style={{marginLeft:'35px',}}>Shopping cart</h1>
        <div className='cart'>
            {
               cartItem && cartItem.map((item)=>(
                    <CartItems
                        item={item} ></CartItems>
                ))
            }
          
            
        </div>
        <div style={{width:'100%',display:"flex",justifyContent:'center',marginTop:'10px',alignItems:'center'}}><button className='btn' style={{borderRadius:'5px'}} on onClick={carthandeler} type='submit' >Checkout</button> <h3 style={{marginLeft:'25px'}}></h3></div>
    </div>
  )
}

export default Cart