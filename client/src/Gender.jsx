import React from 'react';

const Gender = ({ gender }) => {
  if (gender === 'M') {
    return (<span className="gender">Men's</span>);
  } else if (gender === 'W') {
    return (<span className="gender">Women's</span>);
  } else {
    return (<span className="gender">Unisex</span>);
  }
}


export default Gender;