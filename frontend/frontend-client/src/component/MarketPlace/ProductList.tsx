import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-gray-900 text-2xl">
              Product Collection
            </h2>
            <div>
              <label htmlFor="SortBy" className="sr-only">
                SortBy
              </label>

              <select
                id="SortBy"
                className="h-12 text-sm border-gray-300 rounded px-4"
              >
                <option>Sort By</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(5)].map((item, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
