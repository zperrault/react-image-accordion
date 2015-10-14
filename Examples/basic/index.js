import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ImageAccordion } from '../../src'

class App extends Component {
  render() {
    return (
      <ImageAccordion images={[
        {
          src: 'http://www.ecdevelopment.org/wp-content/uploads/2015/04/hippie-flower.jpg',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/A_Daisy_flower.jpg',
        },
      ]}/>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
