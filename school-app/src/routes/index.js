import Login from '@/pages/Login';
import Page404 from '@/pages/Page404';
import Photo from '@/pages/Photo';
import Register from '@/pages/Register';
import Students from '@/pages/Students';
import Student from '@/pages/Students/Student';
import React from 'react';
import { Switch } from 'react-router-dom';
import SaRoute from './SaRoute';

export default function Routes() {
  return (
    <Switch>
      <SaRoute exact path="/" component={Students} />
      <SaRoute exact path="/student/:id/edit" component={Student} isClosed />
      <SaRoute exact path="/student" component={Student} isClosed />
      <SaRoute exact path="/photo/:id" component={Photo} isClosed />
      <SaRoute exact path="/register" component={Register} isClosed={false} />
      <SaRoute exact path="/login" component={Login} />
      <SaRoute path="*" component={Page404} />
    </Switch>
  );
}
