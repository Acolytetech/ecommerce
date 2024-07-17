// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './utils/store'; // Import your Redux store
import Navbar from './component/Navbar/Navbar';
import Banner from './component/banner/Banner';
import Card from './component/banner/Card';
import Testimonials from './component/banner/Tesimonial';
import Whovr from './component/banner/Whovr';
import Subscribe from './component/banner/Subscribe';
import Line from './component/banner/Line';
import Footer from './component/footer/Footer';
import Product from './pages/Product/Product';
import Home from './pages/home/Home';
import ProductDetails from './pages/Product/ProductDetail';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <Provider store={store}> {/* Wrap your App with Provider and pass the Redux store */}
      <Router>
        <Navbar/>
      
        {/* <Line/> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
           {/* <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
