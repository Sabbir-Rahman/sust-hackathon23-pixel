import { StarIcon } from "@heroicons/react/outline";
import React from "react";

const ProductSidebar = () => {
  return (
    <div className="mx-8 mt-8">
      <div className="bg-white py-4 rounded-2xl">
        <p className="px-6 font-semibold mb-4">Created By</p>
        <div className="flex px-6 items-center gap-4">
          <img
            className="h-8 w-8"
            src="/assets/svg/avatar.svg"
            alt="magnifying icon"
          />
          <div className="text-darkGray text-sm font-medium">Dami Soyombo</div>
        </div>
      </div>
      <div className="bg-white py-4 rounded-2xl mt-6">
        <p className="px-6 font-semibold mb-4">Rate This Service</p>
        <div className="flex px-6 items-center gap-1">
          <StarIcon className="h-5 w-5 text-accent" />
          <StarIcon className="h-5 w-5 text-accent" />
          <StarIcon className="h-5 w-5 text-accent" />
          <StarIcon className="h-5 w-5 text-accent" />
          <StarIcon className="h-5 w-5 text-accent" />
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
