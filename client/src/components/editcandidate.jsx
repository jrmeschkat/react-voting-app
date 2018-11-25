import React from 'react';

const EditCandidate = props => {
  const { candidate } = props;
  const { onDeleteCandidate } = props;
  return (
    <div>
      <span>{candidate.name}</span>
      <button onClick={() => onDeleteCandidate(candidate)}>delete</button>
    </div>
  );
};

export default EditCandidate;
