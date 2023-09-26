import React from 'react'
import { Link } from 'react-router-dom'

function SignedInLink() {
  return (
    <div className='ab' style={{marginLeft:"80%",fontSize:"20px",paddingRight:"15px"}}>
    <Link to='/que'>Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/'>LogOut</Link>
</div>
  )
}

export default SignedInLink