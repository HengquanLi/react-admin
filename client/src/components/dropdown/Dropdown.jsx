import React, { useRef } from 'react';
import './dropdown.css';

const clickOutsideRef = (contentRef, toggleRef) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    // console.log(toggleRef)
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle('active')
    } else {
      // user click outside toggle and content
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove('active')
      }
    }
  })
}

const Dropdown = props => {

  const dropdownToggle = useRef(null);
  const dropdownContent = useRef(null);

  clickOutsideRef(dropdownContent, dropdownToggle);

  return (
    <div className="dropdown">
      <button ref={dropdownToggle} className="dropdown-toggle">
        {
          props.icon ? <i className={props.icon}></i> : ''
        }
        {
          props.badge ? <span className="dropdown-toggle-badge">{props.badge}</span> : ''
        }
        {
          props.customToggle ? props.customToggle() : ''
        }
      </button>
      <div ref={dropdownContent} className="dropdown-content">
        {
          props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
        }
        {
          props.renderFooter ? (
            <div className="dropdown-footer">
              {props.renderFooter()}
            </div>
          ) : ''
        }
      </div>
    </div>
  )
}

export default Dropdown
