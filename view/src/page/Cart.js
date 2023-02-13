import React, { useContext} from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import '../components/CartItems.css'
import { ProductContext } from '../components/UserContext'






const Cart = (props) => {
    const {cartItem}=useContext(ProductContext)
   


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
        <div style={{width:'100%',display:"flex",justifyContent:'center',marginTop:'10px',alignItems:'center'}}><button className='btn' style={{borderRadius:'5px'}} >Checkout</button> <h3 style={{marginLeft:'25px'}}>Total Price:</h3></div>
        
       

    </div>
  )
}

export default Cart