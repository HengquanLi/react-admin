import React from 'react';
import './sideBarItem.css';

const SideBarItem = props => {
  const active = props.active ? 'active' : '';
  return (
    <div className="sidebar-item">
      <div className={`sidebar-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default SideBarItem
