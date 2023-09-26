import React, { Component } from 'react'

import '../layout/Contact.css';
import { Link } from "react-router-dom";

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="background-image">
                <h2>
                    <Link to='/que'>
                        <div className="continue-btn">Back</div>
                    </Link>
                </h2>
                <div className="left-content">
                    <h2>-Contact Us-</h2>
                    <h2>Website</h2>
                    <p>www.noisetracking.com</p>
                    <h2>Email Address</h2>
                    <p>noisepollution@gmail.com</p>
                    <h2>Phone Number</h2>
                    <p>FOR ANY HELP, YOU MAY CALL US AT<br />1800-4546-8749</p>
                </div>
                
                
            </div>
        );
    }
}
 
export default Contact;
