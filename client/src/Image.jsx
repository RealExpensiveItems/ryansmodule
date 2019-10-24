import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // selected: false
    }
  }

  render() {
    var style;
    if (this.props.image === this.props.mainImg) {
      style = { borderColor: '#4eaaff' }
    }
    return (
      <img
      className="side-img" 
      style={style}
      onClick={() => this.props.onSideImageClickHandler(this.props.image)} 
      src={this.props.image}
      />
    )
  }

}

export default Image;