import React from "react";

function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-40 bg-yellow-300 text-black py-2 rounded hover:bg-yellow-500 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
