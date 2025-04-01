import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$999", description: "A powerful laptop for all your needs." },
  { id: 2, name: "Smartphone", price: "$499", description: "A sleek smartphone with a great camera." },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones for immersive sound." }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
