import React from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <>
    <div className='aboutusimage'>
    <div className="custom-aboutus-container">
      <div className="top-text">
        <Link to="/que">Dashboard</Link>
      </div>
      <h1>About Us</h1>
      <div className="p1">
      <p>
      Welcome to VoteEase, your trusted platform for secure and convenient online voting. At VoteEase, we are passionate about promoting democratic participation and empowering citizens to make their voices heard in a digital age.
      </p>
      </div>
      <div className="p2">
      <h3>Our Mission :</h3>
      <p>
      Our mission is to revolutionize the way people engage in the democratic process by providing a user-friendly, secure, and efficient platform for online voting. We believe that technology can bridge the gap between citizens and their governments, making it easier for individuals to exercise their right to vote and contribute to the decisions that shape their communities and nations.
      </p>
      </div>
      <div className="p3">
      <h3>Our Values :</h3>
      <p>
      Transparency, inclusivity, and integrity are at the heart of everything we do. We are committed to non-partisanship and providing accurate, unbiased information to help you make informed decisions at the polls.      </p>
      </div>
      <div className="p4">
      <h3>Contact Us :</h3>
      <p>
      Have questions or feedback? We'd love to hear from you. Contact our friendly support team at voteease@gmail.com or +91 9090909090.
      </p>
      <p>
      Join us at VoteEase and be part of the next generation of online voting. Together, we can make democracy more accessible, secure, and convenient for everyone. Your voice matters, and we're here to amplify it.
      </p>
      </div>
    </div>
    </div>
  
    </>
  );
}

export default Terms;