import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {checkUserSession, setCurrentUser} from './redux/user/user.action'

import './App.css';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class  App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {checkUserSession} = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
