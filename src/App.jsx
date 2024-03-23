import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import { ShopContextProvider } from "./shop/shop-context";
import Shoping from "./shop/Shoping";

import { Cart } from "./shop/Cart";
import Productpage from "./shop/Productpage";
import Artisans from "./components/Artisans";
import OrderTrackingPage from "./components/orders";
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
              <Route path="/product" element={<Productpage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/getstart" element={<Artisans />} />
              <Route path="/shop" element={<Shoping/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<OrderTrackingPage />} />
              
              
            </Route>
          </Routes>
        </ShopContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
