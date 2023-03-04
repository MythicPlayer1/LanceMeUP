import React, { useEffect } from 'react'
import Productlists from '../components/Productlists';
import { useContext } from 'react';
import { AddProductContext } from '../components/UserContext';
import { products } from '../components/productItems';
import { Link } from '@mui/material';
import axios from 'axios'
import { useState } from 'react';


const Productlistpage = () => {
  const { addproduct } = useContext(AddProductContext);
  //console.log(addproduct)
  const [datas, setData] = useState([])


  useEffect(() => {
    apiProductget();

  }, [])

  const apiProductget =async () => {
    await fetch('http://localhost:3500/getAddedProduct', {
      method: 'GET',
      headers: {
        'Content-Type': 'appliction/json'
      },
    }).then((res) => res.json()).then((data) => {
      //console.log(data)
      setData(data.datas)
    })

  }

  return (
    <div>
      <div className='addprod-main'>
        <Link to='/admin'> <img src='images/logo.png' style={{ height: '30px', marginTop: '10px' }}></img></Link>
        <h2>P R O D U C T  L I S T </h2>
        <div className='product-list'>
          {datas.map((item) => (
            <Productlists
              item={item}
            ></Productlists>
          ))}
          {
            products.map((item) => (
              <Productlists
                item={item}></Productlists>
            ))
          }
          {/* {data.map((singledata)=>{
              const base64image=btoa(
                String.fromCharCode(...new Uint8Array(singledata.img.data.data))
              );

              return(<img  style={{width:'100px', height:'100'}} src={`data:image/png/jpeg;base64,${base64image}`}></img>)
            })} */}


        </div>


      </div>
    </div>
  )
}

export default Productlistpage;