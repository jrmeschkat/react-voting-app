import React, { Component } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import EditCandidate from '../components/editcandidate';

class EditVote extends Component {
  state = {
    inputCandidate: ''
  };
  render() {
    const { vote } = this.props;
    const { onDeleteVote } = this.props;
    const { onAddCandidate } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name for the vote"
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                onClick={() => onDeleteVote(vote)}
              >
                <FA icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h4>Candidates:</h4>
          <ul className="list-group">
            {vote.candidates.map(c => (
              <li className="list-group-item">
                <EditCandidate candidate={c} />
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              onInput={event =>
                this.setState({ inputCandidate: event.target.value })
              }
              className="form-control"
              placeholder="Candidate"
            />
            <div className="input-group-append">
              <button
                onClick={() => {
                  onAddCandidate(vote, this.state.inputCandidate);
                  this.setState({ inputCandidate: '' });
                }}
                className="btn btn-success"
              >
                <FA icon={faPlusCircle} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditVote;
