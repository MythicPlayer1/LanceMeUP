import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

const Productlists = (props) => {
    return (
        <div className='cart-main'>
            <div className='cart-img'><img className='cart-img' src={props.item.img}></img></div>
            <div className='cart-submain'>
                <h3 style={{ textTransform: 'capitalize' ,color:'black' }}>{props.item.name}</h3>
                <p style={{ width: '500px', height: "50px", color:'black',textTransform: 'capitalize' }}>{props.item.des}</p>
            </div>
            <div style={{ width: '100px', height: "50px", background: '#383838', color: 'white', textAlign: 'center', borderRadius: '5px', marginLeft: '100px' }}><p>${props.item.price}</p></div>
            <span style={{ marginLeft: '4px' }}></span>
            <IconButton>
            <DeleteForeverIcon sx={{color:'black',fontSize:'30px',marginLeft:'300px'}}></DeleteForeverIcon>
            </IconButton>
           

        </div>

    )
}

export default Productlists