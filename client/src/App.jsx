import React from 'react';
import axios from 'axios';

import Gender from './Gender.jsx';
import Category from './Category.jsx';
import Images from './Images.jsx';
import Rating from './Rating.jsx';
import FreeShipping from './FreeShipping.jsx';
import Thumbnails from './Thumbnails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      mainImg: '',
      name: '',
      category: '',
      gender: '',
      price: 0,
      brand: '',
      rating: {},
      images: [],
      sizes: [],
      color_name: '',
      color_1: {},
      color_2: {},
      color_3: {},
      color_4: {},
      quantity: '1',
      // move: this.carouselEnd ? this.carouselEnd.scrollTop : 0,
      hoverReview1: false,
      hoverReview2: false,
      ship: true
    }
    this.onSideImageClickHandler = this.onSideImageClickHandler.bind(this);
    this.getOneProduct = this.getOneProduct.bind(this);
    this.quantityChangeHandler = this.quantityChangeHandler.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.toggleThumbnailClick = this.toggleThumbnailClick.bind(this);
    // this.onTopClick = this.onTopClick.bind(this);
    // this.onBottomClick = this.onBottomClick.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.showCarouselButton = this.showCarouselButton.bind(this);
    this.toggleHover1 = this.toggleHover1.bind(this);
    this.toggleHover2 = this.toggleHover2.bind(this);
    this.onShipClick = this.onShipClick.bind(this);
  }

  componentDidMount() {
    // this.getOneProduct(Math.ceil(Math.random() * 25));
    this.getOneProduct(4);
    this.showCarouselButton();
  }

  // UNSAFE_componentDidUpdate() {
  //   this.showCarouselButton();
  // }

  onSideImageClickHandler(image) {
    this.setState({
      mainImg: image
    })
  }
  
  getOneProduct(id) {
    axios.get(`/product/${id}`)
      .then((results) => {
        console.log(results.data);
        this.setState({
          id: results.data[0].id,
          mainImg: results.data[0].color_1.color_img[0],
          category: results.data[0].category,
          gender: results.data[0].gender,
          price: results.data[0].price,
          brand: results.data[0].brand,
          name: results.data[0].name,
          rating: results.data[0].rating,
          images: results.data[0].color_1.color_img,
          sizes: results.data[0].size,
          color_name: results.data[0].color_1.color_name,
          color_1: results.data[0].color_1,
          color_2: results.data[0].color_2,
          color_3: results.data[0].color_3,
          color_4: results.data[0].color_4
        }, () => console.log(this.state.color_1, 1, this.state.color_2, 2, this.state.color_3, 3, this.state.color_4, 4))
      })
      .catch((err) => {
        console.error(err);
      })
  }

  toggleThumbnailClick(mainImg, images, color_name) {
    // e.preventDefault();
    this.setState({
      mainImg: mainImg,
      images: images,
      color_name: color_name
    })
  }

  quantityChangeHandler(e) {
    const { name, value } = e.target;
    // e.preventDefault();
    this.setState({
      [name]: value
    })
  }

  addQuantity() {
    this.setState({
      quantity: parseInt(this.state.quantity) + 1
    })
  }

  subtractQuantity() {
    if (parseInt(this.state.quantity) > 1) {
      this.setState({
        quantity: parseInt(this.state.quantity) - 1
      })
    }
  }

  toggleHover1() {
    this.setState({
      hoverReview1: !this.state.hoverReview1
    })
  }

  toggleHover2() {
    this.setState({
      hoverReview2: !this.state.hoverReview2
    })
  }

  onShipClick() {
    this.setState({
      ship: !this.state.ship
    })
  }

  showCarouselButton() {
    if (this.carouselEnd) {
      if (this.carouselEnd.scrollTop === 0) {
        document.getElementById('top-carousel').hidden = true;
      } else if (this.carouselEnd.scrollTop === this.carouselEnd.scrollHeight - this.carouselEnd.clientHeight) {
        document.getElementById('bottom-carousel').hidden = true;
      } else {
        document.getElementById('top-carousel').hidden = false;
        document.getElementById('bottom-carousel').hidden = false;
      }
    }
  }

  scrollUp() {
    if (this.carouselEnd) {
      this.carouselEnd.scrollTop -= this.carouselEnd.scrollHeight / (this.state.images.length / 3);
      this.showCarouselButton();
    }
  }
  
  scrollDown() {
    if (this.carouselEnd) {
      this.carouselEnd.scrollTop += this.carouselEnd.scrollHeight / (this.state.images.length / 3);
      this.showCarouselButton();
    }
  }



  render() {
    return (
      <div className="container">
        <div className="nav">
          <nav>
            <Gender gender={this.state.gender}/> > <Category category={this.state.category} />
          </nav>
        </div>
          <div className="carousel-wrapper">
            <button id="top-carousel" className="carousel-btn" onClick={this.scrollUp} hidden={true}><img id="top-btn"/></button>
            <div className="carousel" ref={(el) => { this.carouselEnd = el; }} onScroll={this.showCarouselButton}>
              <Images onSideImageClickHandler={this.onSideImageClickHandler} images={this.state.images} mainImg={this.state.mainImg}/>
            </div>
            <button id="bottom-carousel" className="carousel-btn" onClick={this.scrollDown} hidden={false}><img id="bottom-btn"/></button>
          </div>
          <div className="main-image-wrapper">
            <img className="main-image" src={this.state.mainImg}></img>
            <br/>
            <span className="image-description">
              Image {this.state.images.indexOf(this.state.mainImg) + 1} of {this.state.images.length}: <span id="color-name">{this.state.color_name}</span>
            </span>
          </div>
        <div className="checkout">
          <span className="brand">{this.state.brand}</span>
          <div className="product-info">
            <div id="product-name">{this.state.name}</div>
            <br/>
            <div className="row-flex">
              <Rating rating={this.state.rating}/>
              <button className="rating-info rating-avg">{this.state.rating.rating_avg}</button>
              <button className="rating-info rating-count">({this.state.rating.rating_ct})</button>
              <div className="item-id">Item #{this.state.id}</div>
            </div>
            <div className="price">
              ${this.state.price.toString().includes('.') ? this.state.price : this.state.price.toString() + '.00'}
            </div>
            <br/>
            <div>
              <FreeShipping />
            </div>
            <br/>
            <div className="size-color-wrapper">
              <fieldset className="color-wrapper">
                <div className="color-label">
                  <label>Color : {this.state.color_name}</label><br/>                  
                </div>
                <div>
                  <Thumbnails
                  toggleThumbnailClick={this.toggleThumbnailClick}
                  color_1={this.state.color_1} 
                  color_2={this.state.color_2} 
                  color_3={this.state.color_3} 
                  color_4={this.state.color_4}
                  />
                </div>
              </fieldset>
              <br/>
              <div className="size-quantity-wrapper">
                <div className="size-wrapper">
                  <label>Size</label> <span className="size-chart-button" href="">Size Chart</span>
                  <br/>
                  <select className="size-selector">
                    <option defaultValue="Select Size">Select Size</option>
                    <option value="Available" disabled>Available</option>
                    {this.state.sizes.map((size, key) => {
                      return (
                        <option value={size} key={key}>{size}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="quantity-wrapper">
                  <label>Quantity</label>
                  <br/>
                  <div>
                    <form>
                      <img id="minus-quantity" className="quantity-change" onClick={this.subtractQuantity}/>
                      <input 
                      className="quantity-input" 
                      type="text" 
                      name="quantity" 
                      value={this.state.quantity} 
                      onChange={(e) => this.quantityChangeHandler(e)}
                      />
                      <img id="plus-quantity" className="quantity-change" onClick={this.addQuantity}/>
                      <br/>
                      {this.state.quantity >= 1
                      ?
                      null
                      :
                      <div id="quantity-hidden">
                        <img id="red-x"/>
                        <span id="quantity-boundary">Enter a quantity of 1 or more.</span>
                      </div>
                      }
                    </form>
                  </div>
                </div>          
              </div>
              <br/>
              <br/>
            </div>
            <div className="restriction-warning">
              <div>
                <img className="warning"/>
                <span>Shipping restrictions apply.</span><img id="shipping-warning"/>
              </div>
            </div>
            <br/>
          </div>
          <div className="shipping-options">
            {this.state.ship
            ?
            <button className="shipping-options-button"><img className="selected-ship"/> <strong>Ship to address</strong></button>
            :
            <button onClick={this.onShipClick} className="shipping-options-button"><img className="not-selected-ship"/> <strong>Ship to address</strong></button>
            }
            <br/>
            {this.state.ship
            ?
            <button onClick={this.onShipClick} className="shipping-options-button"><img className="not-selected-ship"/> <strong>Pick up in Store - Free</strong></button>
            :
            <button className="shipping-options-button"><img className="selected-ship"/> <strong>Pick up in Store - Free</strong></button>
            }
            <br/>    
          </div>
          <span id="find-store">Find a store near you</span>
          <br/>
          <br/>
          <div className="add-to-container">
            <button id="add-to-cart">
              <span>Add to cart</span>
            </button>
            <br/>
            <div className="">
              <button className="wish-registry">
                <span>Add to wish list</span>
              </button>
              <button id="wish" className="wish-registry">
                <span>Add to registry</span>
              </button>              
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;