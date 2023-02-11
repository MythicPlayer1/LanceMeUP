import React from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import '../components/CartItems.css'




const Cart = (props) => {
    console.log(props.data)

  return (
    <div>
        <Header></Header>
        <h1 style={{marginLeft:'35px',}}>Shopping cart</h1>
        <div className='cart'>
            {/* {
               props.data && props.data.map((item)=>(
                    <CartItems
                        
                        ></CartItems>
                ))
            } */}
            
        </div>
        <div style={{width:'100%',display:"flex",justifyContent:'center',marginTop:'10px',alignItems:'center'}}><button className='btn' style={{borderRadius:'5px'}} >Checkout</button> <h3 style={{marginLeft:'25px'}}>Total Price:</h3></div>
        
       

    </div>
  )
}

export default Cart