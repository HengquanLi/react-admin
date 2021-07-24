import React from 'react';

import Dropdown from '../dropdown/Dropdown';

import './topNav.css';

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-search">
        <input type="text" placeholder="Search here..."/>
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav-right">
        <div className="topnav-right-item">
          {/* usr profile dropdown */}
          <Dropdown />
        </div>
        <div className="topnav-right-item">
          {/* notification dropdown */}
          <Dropdown />
        </div>
        <div className="topnav-right-item">
          {/* Theme setting dropdown */}
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default TopNav
