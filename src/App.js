import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Page404 from './pages/Page404';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Product from './pages/Product';
import Favorite from './pages/favorite/Favorite';
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path='/login'
            component={Login}
          />
          <Route
            exact path='/'
            component={Home}
            />
          <Route path='/about' component={About} />
          <Route path='/category/:categoryName' component={Category} />
          <Route path='/cart' component={Cart} />
          <Route path='/favorite' component={Favorite}/>
          <Route path="/termsAndConditions" component={TermsAndConditions} />
          <Route path='/product/:productId' component={Product} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;