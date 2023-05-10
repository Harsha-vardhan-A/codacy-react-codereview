
import React, { Component } from 'react';

class Child extends Component {
  render() {
    const { type, label, value, states } = this.props;
    return (
      <div>
        <input
                              type={type}
                              label={label}
                              value={value}
          onChange={(e) => states(e.target.value)}
        />
      </div>
    );
  }
}

export default Child;