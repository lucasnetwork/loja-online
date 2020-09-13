import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './router';
import HomeLayout from '~/Layouts/home';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Layout={HomeLayout} Component={Home} />
      <Route exact path="/cart" Layout={HomeLayout} Component={Cart} />
    </Switch>
  );
};

export default Routes;
