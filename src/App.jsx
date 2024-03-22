import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Product";
import { ShopContextProvider } from "./shop/shop-context";
import { Shop } from "./shop/shop";

import { Cart } from "./shop/Cart";
function App() {
  return (
    <Router>
      <AuthProvider>
        <ShopContextProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </ShopContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
