import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default RouterComponent;
