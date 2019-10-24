import React from 'react';

const Category = ({ category }) => {
  if (category === 'bike') {
    return (<span className="category">Bikes</span>);
  } else if (category === 'shoes') {
    return (<span className="category">Shoes</span>);
  } else if (category === 'belt') {
    return (<span className="category">Belts</span>);
  } else if (category === 'pants') {
    return (<span className="category">Pants</span>);
  } else if (category === 'bag') {
    return (<span className="category">Bags</span>);
  } else {
    return (<span className="category">Tops/Outerwear</span>);
  }
}

export default Category;