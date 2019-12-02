import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';

// Components.
import Error404 from '../components/Error404/Error404';
import AuthenticationPage from '../containers/AuthenticationPage/AuthenticationPage';

// Containers.
import HomePage from '../containers/HomePage/HomePage';
import SchedulerPage from '../containers/ScheluderPage/ScheluderPage';
import SalesPage from '../containers/SalesPage/SalesPage';

// Wrapper
import DrawerWrapper from '../containers/Drawer/DrawerWrapper';

const Routes = () => {
  return (
    <Switch>
      <Route path="/access" component={AuthenticationPage} />
      <AuthRoute
        exact
        path="/"
        component={HomePage}
        container={DrawerWrapper}
      />
      <AuthRoute
        exact
        path="/sales"
        component={SalesPage}
        container={DrawerWrapper}
      />
      <AuthRoute component={Error404} />
    </Switch>
  );
};

export default Routes;

// <AuthRoute
//         exact
//         path="/profile"
//         component={ProfilePage}
//         container={CustomDrawer}
//       />

// <AuthRoute
//         exact
//         path="/sales"
//         component={SalesPage}
//         container={CustomDrawer}
//       />
//       <AuthRoute
//         exact
//         path="/notifications"
//         component={NotificationsPage}
//         container={CustomDrawer}
//       />
