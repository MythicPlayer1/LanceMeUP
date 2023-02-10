import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            
            <div className='main'>
                <div className='sub-main1'>
                    <div className='container-logo-img'>
                        <img className='logo-img' src='images/logo.png'></img>
                    </div>
                    <input className='input-text' type='text' placeholder='Search Products'></input>
                    <button className='btn'> Search</button>
                    <IconButton
                    // onClick={handleCart}
                    >
                        <ShoppingCartIcon
                            sx={{ color: '#383838', marginLeft: '200px' }}
                            fontSize='large'
                        />
                    </IconButton>
                    <div
                        className='profile-div'
                    // onClick={handleClick}
                    >
                        <IconButton>
                            <AccountCircleIcon
                                sx={{ color: '#383838' }}
                                fontSize='large'
                            />
                        </IconButton>
                        {/* {localStorage.getItem('loggedIn') && <p className='profileName' onClick={handleClick}>{localStorage.getItem('username')}</p>} */}
                    </div>


                </div>
                <div className='sub-main2'>
                    <ul className='links-container'>
                        <li className='link-item'> <Link
                            to="/category"
                            className="link"
                            name='Bathroom'
                            //onClick={() => props.handleNavigation('event', 'A')}
                        >
                            Clothing
                        </Link></li>
                        <li className='link-item'>
                            <Link
                                to="/category"
                                className="link"
                                name='Bathroom'
                               // onClick={() => props.handleNavigation('event', 'A')}
                            >
                                Electronics
                            </Link>
                        </li>
                        <li className='link-item'> <Link
                            to="/category"
                            className="link"
                            name='Bathroom'
                            // onClick={() => props.handleNavigation('event', 'A')}
                        >
                            Womans Fashion
                        </Link></li>
                        <li className='link-item'> <Link
                            to="/category"
                            className="link"
                            name='Bathroom'
                            // onClick={() => props.handleNavigation('event', 'A')}
                        >
                            Sports And Outdoor
                        </Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header