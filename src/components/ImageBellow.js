import React, { Component, PropTypes } from 'react'

import { Motion, spring, presets } from 'react-motion'

const SPRING = [200, 30]

export default class ImageBellow extends Component {
  static propTypes = {
    onMouseOver: PropTypes.func,
    onImageLoaded: PropTypes.func,
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleImageLoaded = this.handleImageLoaded.bind(this)

    const img = new Image()
    img.onload = this.handleImageLoaded
    img.src = props.image
  }

  handleImageLoaded({ target: { width, height }}) {
    const { onImageLoaded } = this.props
    onImageLoaded && onImageLoaded(width, height)
  }

  render() {
    const { image, width, height, left, onMouseOver } = this.props
    return (
      <Motion
        style={{
          width: spring(width, SPRING),
          left: spring(left, SPRING),
        }}
      >
        {({ width, left }) =>
          <div
            style={{
              width: width ? `${width}px` : null,
              height: height ? `${height}px` : null,
              position: 'absolute',
              left: `${left}px`,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseOver={() => onMouseOver && onMouseOver()}
          />
        }
      </Motion>
    )
  }
}
