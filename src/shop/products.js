// products.js

// Load PRODUCTS array from localStorage or use a default value if it's not available
let PRODUCTS = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: "img1.jpg",
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: "img2.jpg",
  },
  // other products
];

const addProduct = (newProduct) => {
  PRODUCTS = [...PRODUCTS, newProduct];

  localStorage.setItem("products", JSON.stringify(PRODUCTS));
};

export { PRODUCTS, addProduct };
