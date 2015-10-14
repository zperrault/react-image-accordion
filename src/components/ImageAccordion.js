import React, { Component, PropTypes } from 'react'

import ImageBellow from './ImageBellow'

const style = {
  width: 979,
}

export default class ImageAccordion extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { images } = this.props
    return (
      <div style={{
        width: `${style.width}px`,
        height: '387px',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}>
        {images.map((image, idx) =>
          <ImageBellow
            width={style.width / images.length}
            key={idx}
            idx={idx}
            image={image}
          />)}
      </div>
    )
  }
}
