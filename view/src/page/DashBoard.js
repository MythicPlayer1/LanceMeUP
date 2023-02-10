import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { products } from '../components/productItems'
import ShowItem from '../components/ShowItem'

const DashBoard = () => {
  return (
    <div><Header></Header>
    <Banner></Banner>
    <ShowItem productsLists={products}></ShowItem>
    </div>
  )
}

export default DashBoard