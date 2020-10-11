import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {

  render() {

      return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-5">
          <div className="container">
              <NavBar />

          </div>

      </nav>
    )
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cartItem,
        cartTotal: state.cart.cartTotal
    }
}

export default connect(mapStateToProps)(NavContainer);
