import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

const Productpage = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 transition duration-300 transform hover:scale-105 p-2 m-2">
      <img src={productImage} alt={productName} className="w-full h-auto" />
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-1">{productName}</h3>
        <p className="text-gray-700 mb-1">${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded transition duration-300"
        >
          Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </button>
      </div>
    </div>
  );
};

export default Productpage;
