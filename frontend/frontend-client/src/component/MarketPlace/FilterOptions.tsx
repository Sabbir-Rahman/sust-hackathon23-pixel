import React from "react";

const FilterOptions = () => {
  return (
    <div className="w-[22%] shadow-md rounded-2xl fixed top-40 left-6 bg-white pb-8">
      <h2 className="text-2xl text-center py-4 font-medium">Filter</h2>
      <div className="flex items-center gap-4 justify-center">
        <input
          type="text"
          placeholder="min"
          className="py-4 border border-gray-200 w-20 rounded-xl text-center"
        />
        <p>to</p>
        <input
          type="text"
          placeholder="max"
          className="py-4 border border-gray-200 w-20 rounded-xl text-center"
        />
      </div>
      <div className="px-6 my-6">
        <div className="font-bold text-xs mt-4 mb-2">Location</div>
        <div className="h-8 w-full rounded-lg border-2 p-6 text-xs flex items-center justify-between outline-accent">
          <input className="w-3/4 outline-none" placeholder="Enter location" />
          <img src="/assets/svg/location.svg" alt="location" />
        </div>
      </div>
      <div className="px-8">
        <p className="mb-2 font-medium">Rating</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 accent-green-400"
              type="checkbox"
              value=""
              id="flexCheckDefault "
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              1 Start
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 accent-green-400"
              type="checkbox"
              value=""
              id="flexCheckDefault "
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              2 Start
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 accent-green-400"
              type="checkbox"
              value=""
              id="flexCheckDefault "
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              3 Start
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 accent-green-400"
              type="checkbox"
              value=""
              id="flexCheckDefault "
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              4 Start
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 accent-green-400"
              type="checkbox"
              value=""
              id="flexCheckDefault "
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              5 Start
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
