import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import EditVote from '../components/editvote';
import uuidv4 from 'uuid/v4';

class Vote {
  constructor() {
    this.id = uuidv4();
    this.name = null;
    this.candidates = [];
  }
}

class Candidate {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
}

class Create extends Component {
  state = {
    votes: [
      {
        id: uuidv4(),
        name: null,
        candidates: [
          { name: 'asdf', id: uuidv4() },
          { name: 'asdf2', id: uuidv4() }
        ]
      }
    ]
  };

  onAddVote = () => {
    let votes = cloneDeep(this.state.votes);
    votes.push(new Vote());
    this.setState({ votes });
  };

  onAddCandidate = (vote, name) => {
    let votes = cloneDeep(this.state.votes);
    votes.forEach(v => {
      if (v.id === vote.id) {
        v.candidates.push(new Candidate(name));
      }
    });
    this.setState({ votes });
  };

  onDeleteVote = vote => {
    const votes = this.state.votes.filter(v => v.id !== vote.id);
    this.setState({ votes });
  };

  onDeleteCandidate = (vote, candidate) => {
    const votes = cloneDeep(this.state.votes);
    votes.forEach(v => {
      if (v.id === vote.id) {
        v.candidates = v.candidates.filter(c => c.id !== candidate.id);
      }
    });
    this.setState({ votes });
  };

  renderVotes = () => {
    return this.state.votes.map(vote => (
      <div className="row m-2" key={vote.id}>
        <div className="col">
          <EditVote
            vote={vote}
            onDeleteVote={this.onDeleteVote}
            onAddCandidate={this.onAddCandidate}
            onDeleteCandidate={this.onDeleteCandidate}
          />
        </div>
      </div>
    ));
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
