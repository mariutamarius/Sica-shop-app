import React from 'react';
import { connect } from 'react-redux';
import { signInWithGoogleAction } from "../../redux/actions/user";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import './Login.css'
import { signInWithFacebookAction } from "../../redux/actions/user";
import { Link } from 'react-router-dom';


class Login extends React.Component {
    handleGoogleLogin() {
      const { signInWithGoogleWithDispatch } = this.props;
      signInWithGoogleWithDispatch();
    }
    handleFacebookLogin() {
      const { signInWithFacebookWithDispatch } = this.props;
      signInWithFacebookWithDispatch();
    }
    componentDidUpdate(prevProps) {
      if (this.props.userData !== prevProps.userData) {
        this.props.history.push("/");
      }
    }
  
    render() {
      return (
        <div className="login-page">
          <div className="titlu-login-page">
            <h1 className="h2">Pagina de Login</h1>
            <Link to="/" className="link">
              <h2>Înapoi la Home</h2>
            </Link>
          </div>
          <p>Alege providerul cu care vrei să vrei să te loghezi:</p>
          <div className="col-12-login col-md-6">
            <button
              className="btn btn-outline-dark d-flex align-items-center"
              onClick={() => this.handleGoogleLogin()}
            >
              <Google className="w-50 mr-3" />
              <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
  
            <button
              id="facebook"
              className="btn btn-outline-dark d-flex align-items-center"
              onClick={() => this.handleFacebookLogin()}
            >
              <Facebook className="w-50 mr-3" />
              <span className="text-nowrap">Loghează-te cu Facebook</span>
            </button>
          </div>
        </div>
      );
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      signInWithGoogleWithDispatch: () => dispatch(signInWithGoogleAction()),
      signInWithFacebookWithDispatch: () => dispatch(signInWithFacebookAction()),
    };
  }
  
  function mapStateToProps(state) {
    return {
      userData: state.user.data,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);