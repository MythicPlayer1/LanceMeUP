import React from 'react'
import './CartItems.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItems = (props) => {
 
   
  return (
    <div className='cart-main'>
        <div className='cart-img'><img className='cart-img' src={props.item.img}></img></div>
        <div className='cart-submain'>
            <h3 style={{textTransform:'capitalize'}}>{props.item.name}</h3>
            <p style={{width:'500px',height:"50px",textTransform:'capitalize'}}>{props.item.des} </p>
        </div>
        <div style={{width:'100px',height:"50px", background:'#383838',color:'white',textAlign:'center',borderRadius:'5px',marginLeft:'100px'}}><p>${props.item.price}</p></div>
        <span style={{marginLeft:'400px'}}></span>
        <DeleteForeverIcon fontSize='large'></DeleteForeverIcon>
        
    </div>
  )
}

export default CartItems