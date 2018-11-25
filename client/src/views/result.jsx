import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <RadialChart
          showLabels
          width={300}
          height={400}
          data={[
            { angle: 10, label: 'test', subLabel: 'sublabel' },
            { angle: 0 },
            { angle: 1, label: 'asdf' }
          ]}
        />
      </div>
    );
  }
}

export default Result;
