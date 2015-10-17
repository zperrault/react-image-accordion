import React, { Component, PropTypes } from 'react'

import { Motion, spring } from 'react-motion'

export default class ImageBellow extends Component {
  static propTypes = {
    onMouseOver: PropTypes.func,
    image: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleImageLoaded = this.handleImageLoaded.bind(this)

    const img = new Image()
    img.onload = this.handleImageLoaded
    img.src = props.image.src
  }

  handleImageLoaded({ target: { width, height }}) {
    const { onImageLoaded } = this.props
    onImageLoaded && onImageLoaded(width, height)
  }

  render() {
    const { image, width, left, onMouseOver } = this.props
    return (
      <Motion
        style={{
          width: spring(width),
          left: spring(left),
        }}
      >
        {({ width, left }) =>
          <div
            style={{
              width: width ? `${width}px` : null,
              height: '387px',
              position: 'absolute',
              left: `${left}px`,
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseOver={onMouseOver}
          />
        }
      </Motion>
    )
  }
}
