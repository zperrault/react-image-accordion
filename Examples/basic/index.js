import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ImageAccordion } from 'react-image-accordion'

class App extends Component {
  render() {
    return (
      <ImageAccordion
        width={600}
        height={200}
        images={[
          '/images/0.jpg',
          '/images/1.jpg',
          '/images/2.jpg',
          '/images/3.jpg',
          '/images/4.jpg',
          '/images/5.jpg',
          '/images/6.jpg',
          '/images/7.jpg',
          '/images/8.jpg',
          '/images/9.jpg',
          '/images/10.jpg',
          '/images/11.jpg',
          '/images/12.jpg',
          '/images/13.jpg',
        ]}
      />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
