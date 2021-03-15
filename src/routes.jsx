import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Todo from './pages/Todo';

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/todo',
  name: 'Todo Task',
  component: Todo,
},
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={index} exact path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
