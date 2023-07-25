import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import FlashcardsContainer from './components/FlashcardsContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={FlashcardsContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
