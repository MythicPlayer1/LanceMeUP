
import React, { useContext, useEffect } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { products } from '../components/productItems'
import SecondContainer from '../components/SecondContainer'
import ShowItem from '../components/ShowItem'
import { AddProductContext } from '../components/UserContext'
import jwt from 'react'


const DashBoard = (props) => {
    
     const pouplatequote=async ()=>{
        const data=await  fetch('http://localhost:3500/api_login',{
            headers:{
                'x-access-token':localStorage.getItem("token")
            }
        })
    }

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            const user=jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
            }else{
                pouplatequote()
            }
        }
    })
    const {addproduct}=useContext(AddProductContext)
   

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ShowItem  productsLists={products} addedProductList={addproduct}
            ></ShowItem>
            <SecondContainer></SecondContainer>
            <ShowItem productsLists={products}></ShowItem>
            <Footer></Footer>
           
           
        </div>
    )
}

export default DashBoard