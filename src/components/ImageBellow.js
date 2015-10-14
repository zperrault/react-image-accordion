import React, { Component, PropTypes } from 'react'

export default class ImageBellow extends Component {
  static propTypes = {
    onMouseOver: PropTypes.func,
    image: PropTypes.object.isRequired,
  }

  render() {
    const { image, width, idx } = this.props
    return (
      <div
        style={{
          width: `${width}px`,
          height: '387px',
          position: 'absolute',
          left: `${width * idx}px`,
          backgroundImage: `url(${image.src})`,
          backgroundSize: 'cover',
        }}
      />
    )
  }
}
