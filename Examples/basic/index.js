import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ImageAccordion } from '../../src'

class App extends Component {
  render() {
    return (
      <ImageAccordion
        width={979}
        height={387}
        images={[
          { src: '/images/0.jpg' },
          { src: '/images/1.jpg' },
          { src: '/images/2.jpg' },
          { src: '/images/3.jpg' },
          { src: '/images/4.jpg' },
          { src: '/images/5.jpg' },
          { src: '/images/6.jpg' },
          { src: '/images/7.jpg' },
          { src: '/images/8.jpg' },
          { src: '/images/9.jpg' },
          { src: '/images/10.jpg' },
          { src: '/images/11.jpg' },
          { src: '/images/12.jpg' },
          { src: '/images/13.jpg' },
        ]}
      />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
