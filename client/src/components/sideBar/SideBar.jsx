import React from 'react';
import { Link } from 'react-router-dom';
import SideBarItem from './SideBarItem';

import sideBarItems from '../../assets/JsonData/sidebar_routes.json';

import './sideBar.css';

const SideBar = props => {

  const activeItem = sideBarItems.findIndex(item => item.route === props.location.pathname);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        LOGO
      </div>
      {
        sideBarItems.map((item, index) => (
          <Link to={item.route} key={index}>
            <SideBarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default SideBar
