import React from 'react';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false
    }
    // this.toggleHover1 = this.toggleHover1.bind(this);
    // this.toggleHover2 = this.toggleHover2.bind(this);
    // this.toggleHover3 = this.toggleHover3.bind(this);
    // this.toggleHover4 = this.toggleHover4.bind(this);
  }

  toggleHover1() {
    this.setState({
      hover1: !this.state.hover1
    })
  }

  toggleHover2() {
    this.setState({
      hover2: !this.state.hover2
    })
  }
  
  toggleHover3() {
    this.setState({
      hover3: !this.state.hover3
    })
  }

  toggleHover4() {
    this.setState({
      hover4: !this.state.hover4
    })
  }

  render() {
    // var style1, style2, style3, style4;
    // if (this.state.hover1) {
    //   style1 = { border: '1px solid' }
    // } else if (this.state.hover2) {
    //   style2 = { border: '1px solid' }
    // } else if (this.state.hover3) {
    //   style3 = { border: '1px solid' }
    // } else if (this.state.hover4) {
    //   style4 = { border: '1px solid' }
    // }
    return (
      <div className="thumb-wrapper">
        <div style={{ marginRight: '10px' }}>
          <div className="thumbnail-border">
            <img 
            className="thumbnails" 
          //   onMouseEnter={this.toggleHover1}
          //   onMouseLeave={this.toggleHover1}
          //   style={style1}
            onClick={() => this.props.toggleThumbnailClick(this.props.color_1.color_img[0], this.props.color_1.color_img, this.props.color_1.color_name)}
            src={this.props.color_1.thumbnail}/>
          </div>          
        </div>
        {this.props.color_2.color_name
        ?
        <div style={{ marginRight: '10px' }}>
          <div className="thumbnail-border">
            <img 
            className="thumbnails"
          //   onMouseEnter={this.toggleHover2}
          //   onMouseLeave={this.toggleHover2}
          //   style={style2}
            onClick={() => this.props.toggleThumbnailClick(this.props.color_2.color_img[0], this.props.color_2.color_img, this.props.color_2.color_name)} 
            src={this.props.color_2.thumbnail}/>
          </div>        
        </div>
        :
        null
        }
        {this.props.color_3.color_name
        ?
        <div style={{ marginRight: '10px' }}>
          <div className="thumbnail-border">
            <img 
            className="thumbnails"
          //   onMouseEnter={this.toggleHover3}
          //   onMouseLeave={this.toggleHover3}
          //   style={style3}
            onClick={() => this.props.toggleThumbnailClick(this.props.color_3.color_img[0], this.props.color_3.color_img, this.props.color_3.color_name)}
            src={this.props.color_3.thumbnail}/>
          </div>        
        </div>
        :
        null
        }
        {this.props.color_4.color_name
        ?
        <div style={{ marginRight: '10px' }}>          
          <div className="thumbnail-border">
            <img 
            className="thumbnails"
          //   onMouseEnter={this.toggleHover4}
          //   onMouseLeave={this.toggleHover4}
          //   style={style4}
            onClick={() => this.props.toggleThumbnailClick(this.props.color_4.color_img[0], this.props.color_4.color_img, this.props.color_4.color_name)} 
            src={this.props.color_4.thumbnail}/>
          </div>           
        </div>
        :
        null
        }
      </div>

    )
  }

}

export default Thumbnails;