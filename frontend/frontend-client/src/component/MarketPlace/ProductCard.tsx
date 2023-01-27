import { LocationMarkerIcon, StarIcon } from "@heroicons/react/outline";
import React from "react";

const ProductCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
      <img
        alt="Product Image"
        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="h-56 w-full object-cover"
      />
      <div className="p-4 sm:p-6 bg-white shadow-lg">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">Recycle Plastic</h3>
        </a>
        <div className="mt-2 text-sm leading-relaxed text-gray-500 flex gap-3">
          <p className="text-semibold text-accent text-base">Tk. 1250</p>
          <div className="flex gap-1 items-center text-xs">
            <LocationMarkerIcon className="h-4 w-4 text-lightGray" />
            <p className="text-lightGray">Uttara, Dhaka</p>
          </div>
        </div>
        <div className="flex gap-0.5 mt-4">
          <StarIcon className="h-4 w-4 text-accent" />
          <StarIcon className="h-4 w-4 text-accent" />
          <StarIcon className="h-4 w-4 text-accent" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
