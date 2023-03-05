import React, { useContext, useEffect, useState} from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import '../components/CartItems.css'
import { OrderItemContext, ProductContext } from '../components/UserContext'

const Cart = (props) => {
    const {cartItem, setcartItem}=useContext(ProductContext)
    const {orderItem, setorderItem}=useContext(OrderItemContext)
    const [datas, setData] = useState([])
    const [orderedItem,setorderedItem]=useState('')

 
    useEffect(() => {
      apiProductget();
  
    }, [])
  
    const apiProductget =async () => {
      await fetch('http://localhost:3500/getorderItem', {
        method: 'GET',
        headers: {
          'Content-Type': 'appliction/json'
        },
      }).then((res) => res.json()).then((data) => {
        //console.log(data)
        setData(data.datas)
      })
  
    } 
    console.log(datas)
    const carthandeler=async ()=>{
        await fetch('http://localhost/3500/orderedItem',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                orederdItem:datas
                
            })
        }).then((resp)=>resp.json()).then((ordereddatas)=>{
            setorderedItem(ordereddatas)
        });
       
    }
    //console.log(orderItem)
    console.log(orderedItem)
 
   
  return (
    <div>
        <Header></Header>
        <h1 style={{marginLeft:'35px',}}>Shopping cart</h1>
        <div className='cart'>
            {
               datas.map((item)=>(
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