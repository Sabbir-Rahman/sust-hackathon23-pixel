import React from "react";

const EmptyResult = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24 gap-6">
      <img
        src="/assets/no-data.svg"
        alt="No Data Found"
        className="w-40 h-40"
      />
      <p className="text-accent font-medium text-center ml-6 text-xl">
        No data found
      </p>
    </div>
  );
};

export default EmptyResult;
