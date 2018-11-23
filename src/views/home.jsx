import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1>Hello</h1>
          </div>
          <div className="col-4">
            <h1>World</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
