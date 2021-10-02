import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import { ReactComponent as Login } from "../../assets/icons/login.svg";
import {ReactComponent as Cart} from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as Favorite } from "../../assets/icons/favorite-icon.svg";
import {connect} from 'react-redux';
import { signOutAction } from "../../redux/actions/user";


function Header(props) {
    const {
      numberOfProducts,
      user,
      signOutWithDispatch,
      numberOfProductsFavorite,
    } = props;
  
    function signOutUser() {
      signOutWithDispatch();
    }
  
    return (
      <div className="header container">
        <Link to="/">
          <img src={logo} alt="text-logo" />
        </Link>
        <div className="login">
          <Login id="icon" />
          {user ? (
            <div>
              <p>{user.displayName}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => signOutUser()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="link">
              Sign in
            </Link>
          )}
          <Link to="/cart">
            <Cart />
          </Link>
          <p className="ml-2">{numberOfProducts}</p>
          <Link to="/favorite">
            <Favorite />
          </Link>
          <p className="ml-2">{numberOfProductsFavorite}</p>
        </div>
      </div>
    );
  }
  function mapStateToProps(state) {
    return {
      numberOfProducts: state.cart.products.length,
      numberOfProductsFavorite: state.favorite.products.length,
      user: state.user.data,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      signOutWithDispatch: () => {
        const actionResult = signOutAction();
        dispatch(actionResult);
      },
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Header);