import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/pages/HomePage';
import ProductPage from './Components/pages/ProductPage';
import AboutPage from './Components/pages/AboutPage';
import ContactPage from './Components/pages/ContactPage';
import Footer from './Components/Footer';
import LoginPage from './Components/pages/loginPage';
import SignupPage from './Components/pages/signupPage';
import CartPage from './Components/pages/CartPage';
import ErrorPage from './Components/pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
