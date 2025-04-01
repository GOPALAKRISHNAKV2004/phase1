import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import productsData from "./ProductsData";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Extract query params
  const searchTerm = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  // Form state
  const [filters, setFilters] = useState({
    search: searchTerm,
    category: category,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  // Handle input change
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply filters to URL
  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    for (const key in filters) {
      if (filters[key]) params[key] = filters[key];
    }
    setSearchParams(params);
  };

  // Filter products based on search params
  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || product.category === category) &&
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice))
    );
  });

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={filters.search}
          onChange={handleChange}
        />
        
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
        />
        
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
        />
        
        <button type="submit">Search</button>
      </form>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
