const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected.'));

var productSchema = mongoose.Schema({
  id: Number,
  brand: String,
  name: String,
  category: String,
  gender: String,
  price: Number,
  rating: {
    rating_avg: Number,
    rating_ct: Number
  },
  size: [String],
  color_1: {
      thumbnail: String,
      color_name: String,
      color_img: [String]
  },
  color_2: {
    thumbnail: String,
    color_name: String,
    color_img: [String]
  },
  color_3: {
    thumbnail: String,
    color_name: String,
    color_img: [String]
  },
  color_4: {
    thumbnail: String,
    color_name: String,
    color_img: [String]
  }
});

var Product = mongoose.model('Product', productSchema);

module.exports.find = (callback) => {
  Product.find(callback);
}

module.exports = Product;