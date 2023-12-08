import React, { useState, useEffect } from 'react';
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
import { AppContext } from './Context/productContext';
import ClipLoader from "react-spinners/ClipLoader";

// react-spinners se loading liya hai
const loadingContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const App = () => {
  const [addCartProduct, setAddCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countCartProduct, setCountCartProduct] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      {!loading && <Navbar countCartProduct={countCartProduct} setCountCartProduct={setCountCartProduct} />}
      <AppContext.Provider value={[addCartProduct, setAddCartProduct]}>
        {loading ? (
          <div style={loadingContainer}>
            <ClipLoader
              color={"red"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomePage setCountCartProduct={setCountCartProduct} />
            </Route>
            <Route path="/home" exact>
              <HomePage setCountCartProduct={setCountCartProduct} />
            </Route>
            <Route
              path="/product"
              render={(props) => (
                <LoadingWrapper component={ProductPage}
                  setCountCartProduct={setCountCartProduct}
                  {...props} />
              )}
            />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/cart" render={(props) => <CartPage setCountCartProduct={setCountCartProduct} {...props} />} />
            <Route component={ErrorPage} />
          </Switch>
        )}
      </AppContext.Provider>
      {!loading && <Footer />}
    </Router>
  );
};

const LoadingWrapper = ({ component: Component, ...rest }) => {
  const [componentLoading, setComponentLoading] = useState(true);

  useEffect(() => {
    // Loading for the product page (specific component)
    setTimeout(() => {
      setComponentLoading(false);
    }, 6000);
  }, []);

  return componentLoading ? (
    <div style={loadingContainer}>
      <ClipLoader
        color={"green"}
        loading={componentLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <Component {...rest} />
  );
};

export default App;
