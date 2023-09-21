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
        
        <li><Link to='/service'>Home</Link></li>
        <li><Link to='/product'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </ul>
    </div>
  );
}

export default Sidebar;