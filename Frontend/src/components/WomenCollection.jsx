import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalState } from "../context/GlobalStateContext";

const WomenCollection = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortOption, setSortOption] = useState("Featured");
  const { addToCart } = useGlobalState();
  // const { cart } = state; // You can access other state properties if needed

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/products/6766f3f57428996b0af98224");
        setProducts(response.data);
        setSortedProducts(response.data); // Default sorted list
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    let sorted;
    if (sortValue === "Price: Low to High") {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (sortValue === "Price: High to Low") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else {
      sorted = products; // Default or "Featured"
    }
    setSortedProducts(sorted);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  return (
    <div className="bg-white px-2 sm:px-6 lg:px-12 pb-12 text-gray-800">
      {/* Controls */}
      <div className="flex ml-4 mr-4 justify-end items-center mb-6">
        {/* Items Per Page */}
        <div className="flex items-center mr-3 space-x-4">
          <span className="font-semibold">Items Per Page:</span>
          <select
            className="border pl-2 pr-6 py-2"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Sort By:</span>
          <select
            className="border pl-2 pr-6 py-2"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Featured">Featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {sortedProducts.slice(0, itemsPerPage).map((product) => (
          <div key={product._id} className="p-4">
            <div className="cursor-pointer relative group w-100 h-100">
              <img
                src={`http://localhost:5000${product.images[0]}`}
                alt={product.title}
                className="w-full h-full object-cover transform transition duration-700 group-hover:opacity-0"
              />
              <img
                src={
                  product.images?.[2]
                    ? `http://localhost:5000${product.images[2]}`
                    : `http://localhost:5000${product.images[1]}`
                }
                alt={product.title}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transform transition duration-700 group-hover:opacity-100 -translate-y-2"
              />

              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  addToCart(product); // Add the product to the cart
                }}
                className="cursor-pointer absolute ml-[20%] bottom-1 border-black border-2 px-12 py-3 flex justify-center transition-all duration-700 bg-white bg-opacity-100 text-black text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-y-4 hover:text-white hover:bg-black hover:border-white"
              >
                Add to Cart
              </button>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">
              {product.title}
            </h3>
            <p className="text-center mt-2 text-gray-800 font-semibold">
              Rs {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollection
