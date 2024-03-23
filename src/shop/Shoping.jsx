import React from "react";
import { PRODUCTS } from "./products";
import ProductPage from "./ProductPage";

const Shopping = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">WebRT Shopping</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map over PRODUCTS array to display ProductPage component */}
        {PRODUCTS.map((product) => (
          <ProductPage key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
