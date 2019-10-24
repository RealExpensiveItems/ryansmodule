import React from 'react';
import Image from './Image.jsx';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="inner-carousel">
        <div>
          {this.props.images.map((image, key) => {
            return (
              <div key={key} className="side-images">
                <Image mainImg={this.props.mainImg} images={this.props.images} onSideImageClickHandler={this.props.onSideImageClickHandler} image={image} />
              </div>
            )
          })}
        </div>        
      </div>

    )
  }

}

export default Images;