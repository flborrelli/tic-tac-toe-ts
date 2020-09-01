import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayerSelect from './Components/PlayerSelect';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={PlayerSelect}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;