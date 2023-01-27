const SearchFilter = () => {
  const categories = ["Human", "Social", "Economic", "Environment", "Other"];
  return (
    <div className="w-[22%] bg-white shadow-md fixed top-80 left-10 p-4">
      <div className="flex flex-col text-sm">
        <div className="font-bold text-xs mt-4 mb-2">Category</div>
        <div className="w-full flex">
          <select
            id="SortBy"
            className="h-12 text-sm border-gray-200  px-4 w-full outline-none border-2 mt-1 rounded-lg"
            name="problemTag"
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className="font-bold text-xs mt-4 mb-2">Location</div>
        <div className="h-8 w-full rounded-lg border-2 px-4 py-[22px] text-xs flex items-center justify-between outline-accent">
          <input
            name="location"
            className="w-3/4 outline-none"
            placeholder="Enter location (Optional)"
          />
          <img src="/assets/svg/location.svg" alt="location" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
