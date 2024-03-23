import React from "react";
import { PRODUCTS } from "./products";
import Productpage from "./Productpage";

const Shoping = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">WebRT Shopping</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <Productpage key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shoping;
