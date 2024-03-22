import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={productImage} className="w-20 h-20 object-cover mr-4" alt={productName} />
      <div className="flex-1">
        <p className="text-lg font-semibold">{productName}</p>
        <p className="text-gray-600">Price: ${price}</p>
        <div className="flex items-center mt-2">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => removeFromCart(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v14a1 1 0 11-2 0V3a1 1 0 011-1zm-4 4a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            className="mx-2 w-10 border border-gray-300 rounded text-center focus:outline-none"
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => addToCart(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
