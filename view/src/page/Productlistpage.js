import React from 'react'
import Productlists from '../components/Productlists';
import { useContext } from 'react';
import { AddProductContext } from '../components/UserContext';
import { products } from '../components/productItems';


const Productlistpage = () => {
  const{addproduct}=useContext(AddProductContext);
  console.log(addproduct)

  
  
  return (
    <div>
       <div className='addprod-main'>
        <img src='images/logo.png' style={{ height: '30px', marginTop: '10px' }}></img>
        <h2>P R O D U C T  L I S T </h2>
        <div className='product-list'>
         {addproduct.map((item)=>(
           <Productlists
           item={item}
           ></Productlists>
         ))}
        </div>
      

      </div>
    </div>
  )
}

export default Productlistpage;