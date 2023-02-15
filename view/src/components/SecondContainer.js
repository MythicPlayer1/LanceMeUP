import React from 'react'
import './SecondContainer.css'
import {Link} from 'react-router-dom'

export default function sSecondContainer(props) {
  return (
    <section className="collection-container">
        <Link to="./category" name='Furniture' className="collection" >
          <div>
            <img src={process.env.PUBLIC_URL+'images/lehenga1.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Woman Fashion</p>
          </div>
            
        </Link>
        <Link to='/category' name = 'Kitchen' className="collection">
          <div>
            <img src={process.env.PUBLIC_URL+'images/leathershoes.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Shoes</p>
          </div>
            
        </Link>
        <Link to='/category' name = 'Bathroom' className="collection" >
          <div>
            <img src={process.env.PUBLIC_URL+'images/bathroom.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Bathroom</p>
          </div>
            
        </Link>
    </section>
   
  )
}