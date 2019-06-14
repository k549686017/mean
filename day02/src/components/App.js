import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '1',
          data: ['a','b','c']
        },
        {
          brand: '2',
          data: ['q','w','e','r']
        },
        {
          brand: '3',
          data: ['z','x','c','v']
        }
      ]
    }
  }
  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      let itemArr = [];
      item.data.map((itm, idx) => {
        itemArr.push(<li key = { idx }>{ itm }</li>)
      })
      let oLi = <li key = { index }>{ item.brand }<ul> { itemArr } </ul></li>;
      arr.push(oLi)
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;
