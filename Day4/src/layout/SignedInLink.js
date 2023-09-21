import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SignedInLink=()=>{
    return(
        <ul className='right'>
            <li><NavLink to='/que'>Dashboard</NavLink></li>
        </ul>
       
    )
}
export default SignedInLink;