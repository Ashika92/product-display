import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";


const productsData = [
  { id: 1, name: "Laptop", price: 28000, category: "Category A", rating: 4.5, image: "https://techterms.com/img/xl/laptop_586.png" },
  { id: 2, name: "Mobile", price: 15000, category: "Category B", rating: 4.0, image: "https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg" },
  { id: 3, name: "Camera", price: 10000, category: "Category C", rating: 5.0, image: "https://static.vecteezy.com/system/resources/thumbnails/054/483/671/small_2x/canon-camera-is-laying-on-the-ground-the-lens-is-open-and-the-camera-is-turned-off-free-photo.jpg" },
  { id: 4, name: "Laptop", price: 25000, category: "Category A", rating: 3.8, image: "https://media.cnn.com/api/v1/images/stellar/prod/surface-laptop-16-9.jpg?c=16x9&q=h_720,w_1280,c_fill" },
  { id: 5, name: "Mobile", price: 18000, category: "Category B", rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl9xpOWud1mX4bL3ACLN2ByaHbNDsQbm7WA&s" },
  { id: 6, name: "Camera", price: 8000, category: "Category C", rating: 5.0, image: "https://www.iphotography.com/wp-content/uploads/2023/06/Best-Cameras-for-Professional-Photography-6.jpg" },
  { id: 7, name: "Laptop", price: 35000, category: "Category A", rating: 3.8, image: "https://5.imimg.com/data5/JL/QW/MY-2974783/computer-laptop-500x500.jpg" },
  { id: 8, name: "Mobile", price: 25000, category: "Category B", rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f970JSQv5b_zza0Xghfq-wRwPJroW_6FFQ&s" },
  { id: 9, name: "Camera", price: 12000, category: "Category C", rating: 5.0, image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSort = (e) => setSort(e.target.value);

  // Filtered products
  let filtered = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Sorting
  if (sort === "price-low-high") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-high-low") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating-high-low") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="bg-blue-50 flex flex-wrap justify-end items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded w-full sm:w-1/3"
            value={search}
            onChange={handleSearch}
          />

          <select className="border p-2 rounded" value={category} onChange={handleCategory}>
            <option value="All">All Categories</option>
            <option value="Category A">Laptop</option>
            <option value="Category B">Mobile</option>
            <option value="Category C">Camera</option>
          </select>

          <select className="border p-2 rounded" value={sort} onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="price-low-high">Price: Low → High</option>
            <option value="price-high-low">Price: High → Low</option>
            <option value="rating-high-low">Rating: High → Low</option>
          </select>
        </div>

        <ProductList products={filtered} />
      </div>
    </div>
  );
}

export default App;
