import React from 'react';
import Modal from 'react-modal';
import { useLayoutEffect } from 'react';

class FreeShipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    // this.useLockBodyScroll = this.useLockBodyScroll.bind(this);
  }

  UNSAFE_componentWillMount() {
    Modal.setAppElement('body');
  }

  open() {
    this.setState({
      open: true
    })
  }
  
  close() {
    this.setState({
      open: false
    })
  }

  // useLockBodyScroll() {
  //   l(() => {
  //    const originalStyle = window.getComputedStyle(document.body).overflow;  
  //    document.body.style.overflow = 'hidden';
  //    return () => document.body.style.overflow = originalStyle;
  //    }, []);
  // }

  render() {
    const style = {
      overlay: {
        background: '#292929',
        // opacity: '.8'
      },
      content: {
        background: 'rgba(255, 255, 255, 1)',
        // background: '#292929',
        // opacity: '1',
        borderRadius: '.3rem'
      }
    }
    // this.useLockBodyScroll();
    return (
      <div>
        {this.state.open
        ?
        <Modal className="freeshipping-modal" isOpen={this.state.open} onRequestClose={this.close} style={style}>
          <button id="close-modal" onClick={this.close}><span>X</span></button>
          <div id="modal-title"><strong>Free U.S. standard shipping on orders of $50 or more.</strong></div>
          <ul>
            <li>Offer valid only on orders placed at REI.com, REI Outlet and 1-800-426-4840.</li>
            <li>Offer not valid on return shipments, special orders, prior purchases, REI gift cards, memberships, shop services and rentals.</li>
            <li>Offer is limited to stock on hand and backorderable items, is nontransferable and is not redeemable for cash.</li>
            <li>Offer valid on all orders with a subtotal of $50 or more; other discounts applied to your order could change your subtotal.</li>
            <li>Offer limited to standard shipping to U.S. addresses only (including APOs and FPOs).</li>
            <li>Oversized shipping charges will be applied to any heavy or large items in your order. Oversized shipping charges will be reflected at checkout.</li>
            <li>Offer valid for free oversize shipping on YETI, OtterBox, and RovR Coolers.</li>
            <li>To order by phone, call 1-800-426-4840 Mon-Fri, 5am through 10pm and Sat-Sun, 6am through 9pm PT.</li>
            <li>Terms and conditions apply. Please see www.rei.com/free-shipping.</li>
          </ul>
          <span style={{ color: '#3278ae' }}>Estimated arrival dates</span> are for domestic orders placed today. Estimated arrival dates are not guaranteed. Weather delays and other unforeseen circumstances may impact delivery time.
        </Modal>
        :
        <button onClick={this.open} className="freeshipping-button">
          <img className="truck"></img>
          <span><strong>This item ships for FREE!</strong></span>
        </button>        
        }
      </div>
    )
  }

}

export default FreeShipping;