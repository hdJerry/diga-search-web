import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/repo' element={ <h4>Repo Page</h4> } />
    </Routes>
  );
}

export default App;
