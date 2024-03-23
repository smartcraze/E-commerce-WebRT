import React, { useState } from "react";
import { addProduct } from "../shop/products";

const ProductUploadPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here if needed

    const newProduct = {
      id: Math.floor(Math.random() * 1000) + 1, // Generating random ID for demo purpose
      productName: productData.name,
      price: parseFloat(productData.price),
      productImage: productData.image ? URL.createObjectURL(productData.image) : null
    };

    addProduct(newProduct); // Add new product using the function from products.js

    console.log(newProduct); // For testing purposes

    setProductData({
      name: "",
      description: "",
      price: "",
      image: null
    });
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-600">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Upload Your Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter product price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Product Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUploadPage;
