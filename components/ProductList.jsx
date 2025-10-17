import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {products.length === 0 && (
        <p className="text-center col-span-full text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
