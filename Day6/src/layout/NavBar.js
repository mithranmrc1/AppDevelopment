import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'

import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice"; 
import './NavBar.css';

const NavBar=()=>{
  const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest"; 
    return(
        <nav className="navbarbackground">
            <div className="containers">
           
                <Link to='loginbtn' className="brand-logo">URBAN NOISE POLUTION</Link>
                
                <SignedInLink/>
  
                 <div className='w'>
                 </div>
                <div id="user">Welcome  {username}</div> 
              
            </div>
        </nav>
        
    )
}
export default NavBar;