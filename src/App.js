import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/pages/HomePage';
import ProductPage from './Components/pages/ProductPage';
import AboutPage from './Components/pages/AboutPage';
import ContactPage from './Components/pages/ContactPage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
