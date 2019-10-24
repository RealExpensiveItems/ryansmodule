import React from 'react';
// import Stars from './dist/stars++';

class Rating extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (4.5 <= this.props.rating.rating_avg < 5) {
      return (
        <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star5 rating-stars"></img>        
          </div>
        </div>

      );
    } else if (4 <= this.props.rating.rating_avg < 4.5) {
      return (
        <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        </div>
      )
    } else if (3.5 <= this.props.rating.rating_avg < 4) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star5 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (3 <= this.props.rating.rating_avg < 3.5) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (2.5 <= this.props.rating.rating_avg < 3) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star5 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (2 <= this.props.rating.rating_avg < 2.5) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (1.5 <= this.props.rating.rating_avg < 2) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star5 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (1 <= this.props.rating.rating_avg < 1.5) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>       
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>   
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (0.5 <= this.props.rating.rating_avg < 1) {
      return (
        // <div>
          <div className="star-wrapper">
            <img className="star5 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>   
            <img className="star0 rating-stars"></img>
          </div>
        // </div>
      )
    } else if (0 <= this.props.rating.rating_avg < 0.5) {
      return (
        <div>
          <div className="star-wrapper">
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>
            <img className="star0 rating-stars"></img>   
            <img className="star0 rating-stars"></img>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="star-wrapper">
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
            <img className="star10 rating-stars"></img>
          </div>
        </div>
      )
    }
  }
}

export default Rating;