import React, { Component } from 'react';

class Home extends Component {
  state = {
    testVotes: []
  };
  componentDidMount() {
    fetch('/api/v1/votes')
      .then(response => response.json())
      .then(testVotes => {
        this.setState({ testVotes });
      });
  }

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
        <div className="row justify-content-center">
          <ul>
            {this.state.testVotes.map(v => (
              <li key={v.id}>{v.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
