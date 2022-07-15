import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/ProfileScreen';




function App() {
  return (
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
