import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '肉',
          data: ['红烧肉','土豆牛肉','黑椒牛柳','牛排']
        },
        {
          brand: '素',
          data: ['土豆丝','西蓝花','茄子','白菜']
        },
        {
          brand: '面',
          data: ['意大利面','牛肉面','汤面','鸡蛋面']
        }
      ]
    }
  }

  render () {
    return (
      <ul>  
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.brand }
                <ul>
                  {
                    item.data.map((itm, idx) => {
                      return (
                        <li key = { idx }>
                          { itm }
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;