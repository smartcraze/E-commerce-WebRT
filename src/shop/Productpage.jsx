import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

const ProductPage = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 transition duration-300 transform hover:scale-105 p-2 m-2 max-w-xs shadow-md h-full"> {/* Added h-full class to make all cards same height */}
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-2">
        {/* Display Product Name */}
        <h3 className="text-lg font-semibold mb-1">{productName}</h3>
        {/* Display Product Price */}
        <p className="text-gray-700 mb-2">${price}</p>
        {/* Button to Add Item to Cart */}
        <button
          onClick={() => addToCart(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          {cartItemCount > 0 ? (
            // If item is already in cart, show count
            <>
              <span>Added to Cart</span>
              <span className="ml-1 font-bold">{cartItemCount}</span>
            </>
          ) : (
            // If item is not in cart, show "Add to Cart"
            <span>Add to Cart</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

