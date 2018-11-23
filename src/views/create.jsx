import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import EditVote from '../components/editvote';
import uuidv4 from 'uuid/v4';

class Vote {
  id = uuidv4();
  name = null;
  candidates = [];
}

class Candidate {
  id;
  name;
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
}

class Create extends Component {
  state = {
    votes: []
  };

  onAddVote = () => {
    let votes = cloneDeep(this.state.votes);
    votes.push(new Vote());
    this.setState({ votes });
  };

  onAddCandidate = (vote, name) => {};

  onDeleteVote = vote => {
    const votes = this.state.votes.filter(v => v.id !== vote.id);
    this.setState({ votes });
  };

  renderVotes = () => {
    return this.state.votes.map(vote => {
      return (
        <div className="row m-2" key={vote.id}>
          <div className="col">
            <EditVote
              vote={vote}
              onDeleteVote={this.onDeleteVote}
              onAddCandidate={this.onAddCandidate}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        {this.renderVotes()}
        <div className="row">
          <div className="col-2">
            <button onClick={this.onAddVote} className="btn btn-success">
              Add Vote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
