import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './layout.css';

import TopNav from '../topNav/TopNav';
import SideBar from '../sideBar/SideBar';
import Routes from '../Routes';

const Layout = () => {
  return (
    <Router>
      <Route render={(props)=>(
        <div className="layout">
          <SideBar {...props}/>
          <div className="layout-content">
            <TopNav />
            <div className="layout-content-main">
              <Routes />
            </div>
          </div>
        </div>
      )}>
      </Route>
    </Router>
  )
}

export default Layout
