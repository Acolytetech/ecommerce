// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import Product from './pages/Product/Product';
import ProductDetails from './pages/Product/ProductDetail';
import Cart from './pages/cart/Cart';
import Address from './pages/address/Address';
import History from './pages/history/History';
import { CartProvider } from 'react-use-cart';
import ShowModel from './component/model/ShowModel';
import Aboutus from './pages/About/Aboutus';
import ShowAddressModel from './component/model/ShowAddressModel';
import ResetPassword from './component/ResetPassword';
import FakePayment from './pages/payment/FakePayment';
import OrderConfirmation from './pages/payment/OrderConfirmation';
import ContactUs from './pages/contactuspage/ContactUs';
import ReturnProductForm from './pages/return/ReturnProductForm';

function App() {
  const [isLoginModelOpen, setIsLoginModelOpen] = React.useState(false);
  const [isAddressModelOpen, setIsAddressModelOpen] = React.useState(false);

  const openLoginModel = () => setIsLoginModelOpen(true);
  const closeLoginModel = () => setIsLoginModelOpen(false);
  const openAddressModel = () => setIsAddressModelOpen(true);
  const closeAddressModel = () => setIsAddressModelOpen(false);

  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Navbar openModel={openLoginModel} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart openLoginModel={openLoginModel} openAddressModel={openAddressModel} />} />
            <Route path="/order-history" element={<History />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="/address" element={<Address openAddressModel={openAddressModel} />} />
            <Route path="/reset/:token" element={<ResetPassword />} />
            <Route path="/fake-payment" element={< FakePayment/> }/>
            <Route path="/order-confirmation" element={<OrderConfirmation/>} />
            <Route path="/returnProduct" element={<ReturnProductForm/>} />
          </Routes>
          {isLoginModelOpen && <ShowModel closeModel={closeLoginModel} />}
          {isAddressModelOpen && <ShowAddressModel closeModel={closeAddressModel} />}
        </Router>
        <Footer />
      </CartProvider>
    </Provider>
  );
}

export default App;

// src/component/ResetPassword.js

