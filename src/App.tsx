import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <AuthPage />
        </Route>
      <Route path='/search'>
        <SearchPage />
        </Route>
      <Route path='/'>
        <h4>Repo Page</h4>
      </Route>
    </Switch>
  );
}

export default App;
