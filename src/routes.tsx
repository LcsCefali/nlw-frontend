import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanages from './pages/CreateOrphanages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/app" component={OrphanagesMap} />

        <Route exact path="/orphanages/create" component={CreateOrphanages} />
        <Route exact path="/orphanages/:id" component={Orphanage} />

        <Route path="/">
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;