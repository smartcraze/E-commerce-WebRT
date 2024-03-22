import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "./products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="mt-8">
          <p className="text-lg font-semibold mb-2">Subtotal: ${totalAmount}</p>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl mt-8">Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
