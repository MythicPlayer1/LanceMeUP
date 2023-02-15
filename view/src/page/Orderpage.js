import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../components/productItems'

import Productlists from '../components/Productlists'
import { OrderItemContext } from '../components/UserContext'


export const Orderpage = () => {
    const { orderItem } = useContext(OrderItemContext)
    console.log(orderItem)
    console.log(products)
    return (
        <div>
            <div className='addprod-main'>
                <Link to='/admin'> <img src='images/logo.png' style={{ height: '30px', marginTop: '10px' }}></img></Link>
                <h2>P R O D U C T  L I S T </h2>
                <div className='product-list'>
                     {orderItem.map((item) => (
                        <Productlists
                            item={item}
                        ></Productlists>
                    ))}
                </div>


            </div>
        </div>

    )
}
