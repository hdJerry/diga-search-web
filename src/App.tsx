import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage';
import PrivateRoute from './components/PrivateRoute';
import RepoPage from './pages/RepoPage';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <AuthPage />
        </Route>
      <PrivateRoute exact path='/' component={SearchPage} redirectTo='/login' />
      <PrivateRoute exact path='/repo' component={RepoPage} redirectTo='/login' />
      <Route exact path="*">
        <h4>Error Page</h4>
      </Route>
    </Switch>
  );
}

export default App;
