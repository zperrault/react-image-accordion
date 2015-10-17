import React, { Component, PropTypes } from 'react'

import ImageBellow from './ImageBellow'

export default class ImageAccordion extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedImage: null,
      imageDimensions: {},
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  handleMouseOver(idx) {
    return () => {
      this.setState({selectedImage: idx})
    }
  }

  handleImageLoaded(idx) {
    return (width, height) => {
      this.setState({
        imageDimensions: {
          ...this.state.imageDimensions,
          [idx]: {
            width,
            height,
            ratio: width / height,
          },
        },
      })
    }
  }

  render() {
    const { images, width, height } = this.props
    const { selectedImage, imageDimensions } = this.state
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          margin: 0,
          padding: 0,
        }}
        onMouseOut={() => this.setState({selectedImage: null})}
      >
        {images.map((image, idx) => {
          if (selectedImage != null) {
            const selectedWidth = imageDimensions[selectedImage].ratio * height
            const unselectedWidth = (width - selectedWidth) / (images.length - 1)
            if (idx < selectedImage) {
              return <ImageBellow
                      key={idx}
                      image={image}
                      width={unselectedWidth}
                      height={height}
                      left={idx * unselectedWidth}
                      onMouseOver={this.handleMouseOver(idx)}
                      onImageLoaded={this.handleImageLoaded(idx)}
                     />
            } else if (idx === selectedImage) {
              return <ImageBellow
                      key={idx}
                      image={image}
                      width={selectedWidth}
                      height={height}
                      left={idx * unselectedWidth}
                      onMouseOver={this.handleMouseOver(idx)}
                      onImageLoaded={this.handleImageLoaded(idx)}
                     />
            } else {
              return <ImageBellow
                      key={idx}
                      image={image}
                      width={unselectedWidth}
                      height={height}
                      left={((idx-1) * unselectedWidth) + selectedWidth}
                      onMouseOver={this.handleMouseOver(idx)}
                      onImageLoaded={this.handleImageLoaded(idx)}
                     />
            }
          } else {
            const unselectedWidth = width / images.length
            return <ImageBellow
                    key={idx}
                    image={image}
                    width={unselectedWidth}
                    height={height}
                    left={idx * unselectedWidth}
                    onMouseOver={this.handleMouseOver(idx)}
                    onImageLoaded={this.handleImageLoaded(idx)}
                   />
          }
        })}
      </div>
    )
  }
}
