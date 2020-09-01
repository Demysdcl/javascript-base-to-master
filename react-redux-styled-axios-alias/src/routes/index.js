import Login from '@/pages/Login';
import Page404 from '@/pages/Page404';
import React from 'react';
import { Switch } from 'react-router-dom';
import SaRoute from './SaRoute';

export default function Routes() {
  return (
    <Switch>
      <SaRoute exact path="/" component={Login} />
      <SaRoute path="*" component={Page404} />
    </Switch>
  );
}
