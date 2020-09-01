import Login from '@/pages/Login';
import Page404 from '@/pages/Page404';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
