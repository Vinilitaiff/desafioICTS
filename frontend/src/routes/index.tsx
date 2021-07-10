import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Purchase from '../pages/Purchase';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/purchase" component={Purchase} />
  </Switch>
);

export default Routes;
