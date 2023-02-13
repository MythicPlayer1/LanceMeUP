import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddProductContext } from '../components/UserContext'
import './Adminpage.css'


const Adminpage = () => {
  const { addproduct} = useContext(AddProductContext)
  console.log(addproduct)
  const navigate = useNavigate()
  // const {name,price,des,img}=addproduct || {};
  // const newarr=[{name:name,price:price,des:des,img:img},]


  return (
    <div>
      <div className='h1-tag'><h1 >A D M I N </h1></div>

      <div className='admin-main'>
        <div className='admin-submain'>
          <div className='admin-img'> <img className='admin-img' src='images/online-shopping.png'></img></div>
          <button className='admin-btn' onClick={() => { navigate('/addproduct') }} >AddProduct</button>
        </div>

        <div className='admin-submain'>
          <div className='admin-img'> <img className='admin-img' src='images/productlist.png'></img></div>
          <div><button className='admin-btn' onClick={() => { navigate('/productlist') }}> Productlist</button></div>

        </div>
        <div className='admin-submain'>
          <div className='admin-img'> <img className='admin-img' src='images/cartlist.png'></img></div>
          <div><button className='admin-btn'>OrderList</button></div>
        </div>
      </div>


    </div>
  )
}

export default Adminpage