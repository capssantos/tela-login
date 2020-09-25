import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cadastro from './view/cadastro';
import Login from './view/login';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/novousuario' component={Cadastro} />
    </Router>
  );
}

export default App;
