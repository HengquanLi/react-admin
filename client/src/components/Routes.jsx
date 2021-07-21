import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Cleaners from '../pages/Cleaners';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/customers' component={Customers} />
      <Route path='/cleaners' component={Cleaners} />
    </Switch>
  )
}

export default Routes
