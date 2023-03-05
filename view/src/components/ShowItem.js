import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductCard from './ProductCard'
import './ShowItem.css'
import { useEffect } from 'react'



const ShowItem = (props) => {
    const [apidata,setApiData]=useState([]);

    useEffect(
        () => {
            const productContainer = [...document.querySelectorAll('.product-container')];
            const nxtBtn = [...document.querySelectorAll('#nxt-btn')];
            const preBtn = [...document.querySelectorAll('#pre-btn')];

            productContainer.forEach((item, i) => {
                let containerDimesions = item.getBoundingClientRect();
                let containerWidth = containerDimesions.width;

                nxtBtn[i].addEventListener('click', () => {
                    item.scrollLeft += containerWidth;
                })

                preBtn[i].addEventListener('click', () => {
                    item.scrollLeft -= containerWidth;
                })
            })
        }
    )

    useEffect(()=>{
        productGet();
     
    },[])

    const productGet= async ()=>{
       await fetch("http://localhost:3500/addproduct",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((data)=>{
            setApiData(data)
        })

    }

  
    
  
    return (
        <div className='products'>
            <h2 className="product-category">Best Selling Products</h2>
            <IconButton
                id="pre-btn"
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <IconButton
                id="nxt-btn"
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <div className="product-container">
                {
                   props.productsLists && props.productsLists.map((products)=>(
                        <ProductCard 
                        name={products.name}
                        img={products.img}
                        price={products.price}
                        des={products.des}
                           
                        ></ProductCard>

                    ))
                }
                { 
                     apidata.map((addedproduct)=>(
                        <ProductCard
                            name={addedproduct.name}
                            img={addedproduct.img}
                            price={addedproduct.price}
                            des={addedproduct.des}
                        ></ProductCard>
                    ))
                }

            </div>

        </div>
    )
}

export default ShowItem;