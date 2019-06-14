import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1',this);
  }
  bthClickFn () {
    console.log('2', this);
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn }>react按钮</button>
      </div>
    )
  }
}

export default Com;
