import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

const Productpage = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
        <p className="text-gray-700 mb-2">${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </button>
      </div>
    </div>
  );
};

export default Productpage;
