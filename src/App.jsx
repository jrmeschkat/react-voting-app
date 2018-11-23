import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './views/home';
import Result from './views/result';
import Create from './views/create';

const NotFound = () => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">404: Not Found</h1>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/result" component={Result} />
            <Route path="/create" component={Create} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
