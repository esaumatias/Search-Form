import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormQuestions from '../pages/formQuestions/FormQuestions';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ FormQuestions } />
    </Switch>
  );
}

export default Rotas;
