import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
      <ul className="sidebar-menu">
        
        <li><Link to='/loginbtn'>Home</Link></li>
        <li><Link to='/s'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/Feedback'>Feedback</Link></li>
        <li><Link to='/terms'>About</Link></li>
        
      </ul>
      </ul>
    </div>
  );
}

export default Sidebar;