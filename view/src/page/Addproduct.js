
import React, { useContext } from 'react'
import './Adminpage.css'
import { useState } from 'react'
import { AddProductContext } from '../components/UserContext'
import { useNavigate } from 'react-router-dom'



const Addproduct = () => {
  
  const navigate=useNavigate()
  const { addproduct, setaddproduct } = useContext(AddProductContext)
  const [file, setFile] = useState(null)
  const [fileDataURL, setFileDataURL] = useState(null);
  const [addname, setname] = useState('')
  const [addprice, setprice] = useState('')
  const [adddes, setdes] = useState('')
  


  const namehandler = (event) => {
    setname(event.target.value)
  }
  const pricehandler = (event) => {
    setprice(event.target.value)
  }
  const deshandler = (event) => {
    setdes(event.target.value);
  }
  const submithandler = (event) => {
    event.preventDefault();
    const newArry=[...addproduct]
    const newProduct = {
      name: addname,
      price: addprice,
      des: adddes,
      img: fileDataURL
    }
    newArry.push(newProduct)
    setaddproduct(newArry)
    alert('product added')
    console.log(addproduct)
    navigate('/admin')
    setFileDataURL(' ')
    setname(' ')
    setprice(' ')
    setdes(' ')

  }

  const changehandler = (e) => {
    const file = e.target.files[0];

    setFile(file)

    console.log(file) //yesma files ko sabai detail haru aaucha like format, size, name etc...
    let fileReader = false;
    fileReader = new FileReader(); //FileReader is an API that uses FILE object to read the selected user's files.
    fileReader.onload = (e) => {
      const { result } = e.target;

      setFileDataURL(result)
    }
    fileReader.readAsDataURL(file);

  }
  return (
    <form onSubmit={submithandler}>
      <div className='addprod-main'>
        <img src='images/logo.png' style={{ height: '30px', marginTop: '10px' }}></img>
        <h2>A D D   P R O D U C T</h2>

      </div>
      <div className='addprod-submain'>
        <div style={{ marginLeft: '150px', width: '500px' }}>
          <h3> Product Image</h3>
          <img src={fileDataURL} style={{ height: '450px', width: '400px', borderRadius: '7px' }}></img>

        </div>
        <div className='addprod-submain1'>
          <p>Name of Product</p>
          <input className='input-btn' value={addname} onChange={namehandler} placeholder='Name Of Product'></input>
          <p>Price</p>
          <input value={addprice} type='number' className='input-btn' onChange={pricehandler} placeholder='name'></input><br></br>
          <p>Choose Image</p>
          <input type='file' onChange={changehandler}></input>
          <p>Description</p>
          <textarea value={adddes} onChange={deshandler} style={{ height: '300px', borderRadius: '5px', width: '400px', border: '1px solid rgba(0,0,0,0.15)', fontFamily: 'sans-serif' }} placeholder='name'></textarea><br>
          </br>
          <button style={{ widht: '350px', height: '30px', color: 'white', background: 'green', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '5px' }} >ADD PRODUCT</button>
        </div></div>
        <button onClick={()=>{navigate('/admin')}}>ADMIN</button>

    </form>
  )
}

export default Addproduct