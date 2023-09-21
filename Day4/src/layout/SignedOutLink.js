import React from 'react'
import { NavLink } from 'react-router-dom';
const SignedOutLink=()=>{
    return(
        <ul className='right'>
            <li><NavLink to='/register'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            <li><NavLink to='/footer' className='btn btn-floating pink lighten-1'>Us</NavLink></li>
        </ul>
           
     
    )
}
export default SignedOutLink;