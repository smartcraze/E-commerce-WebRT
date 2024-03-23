import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      {/* Display Product Image */}
      <img src={productImage} className="w-20 h-20 object-cover mr-4" alt={productName} />
      <div className="flex-1">
        {/* Display Product Name */}
        <p className="text-lg font-semibold">{productName}</p>
        {/* Display Product Price */}
        <p className="text-gray-600">Price: ${price}</p>
        <div className="flex items-center mt-2">
          {/* Button to Remove Item from Cart */}
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
          {/* Input to Update Item Count */}
          <input
            className="mx-2 w-10 border border-gray-300 rounded text-center focus:outline-none"
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          {/* Button to Add Item to Cart */}
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => addToCart(id)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
