import React, { useContext } from 'react'
import './Header.css'
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import {  UserContext } from './UserContext';


const Header = () => {
    const {User,setUser}=useContext(UserContext)
    const logOuthandler=()=>{
        navigate('/login')
        setUser(null)
        setUser(false)
    }
    console.log(User)
    const navigate=useNavigate();
    return (
        <div>
            
            <div className='main'>
                <div className='sub-main1'>
                    <div className='container-logo-img'>
                       <Link to='/dashboard'> <img className='logo-img' src='images/logo.png' ></img></Link>
                    </div>
                    <input className='input-text' type='text' placeholder='Search Products'></input>
                    <button className='btn'> Search</button>
                    <span style={{marginLeft:'250px'}}></span>
                    <IconButton
                      onClick={()=>{
                          navigate('/cart')
                      }}
                    >
                        <ShoppingCartIcon
                            sx={{ color: '#383838' }}
                            fontSize='large'
                        />
                    </IconButton>
                    {
                        User? <div
                        className='profile-div'
                         onClick={logOuthandler}
                    >
                        <IconButton>
                            <LogoutIcon
                                sx={{ color: '#383838' }}
                                fontSize='large'
                            />
                        </IconButton>
                       
                        {/* {localStorage.getItem('loggedIn') && <p className='profileName' onClick={handleClick}>{localStorage.getItem('username')}</p>} */}
                    </div>: <div
                        className='profile-div'
                         onClick={()=>{
                             navigate('/login')
                         }}
                    >
                        <IconButton>
                            <AccountCircleIcon
                                sx={{ color: '#383838' }}
                                fontSize='large'
                            />
                        </IconButton>
                        {/* {localStorage.getItem('loggedIn') && <p className='profileName' onClick={handleClick}>{localStorage.getItem('username')}</p>} */}
                    </div>
                    }
                  
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