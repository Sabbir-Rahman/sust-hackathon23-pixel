import { ShoppingBagIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const HomeNavigation = () => {
  return (
    <div>
      <div className="fixed top-24 right-10">
        <div className="bg-white shadow-md rounded-2xl p-4 w-[300px] h-[300px] flex flex-col justify-between">
          <img src="/assets/sampleMap.png" className="h-[200px] rounded-xl" />
          <button className="inline-block bg-accent py-3 text-sm font-medium text-white rounded-xl">
            Expand
          </button>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4 w-[300px] flex flex-col justify-between mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-darkGray font-semibold text-lg">
              Market Place
            </h2>
            <ShoppingBagIcon className="h-6 w-6 text-lightGray" />
          </div>
          <div className="flex gap-2 items-center bg-[#ECF6EC] p-2 rounded-lg mt-4 mb-2">
            <img src="/assets/svg/recycle.svg" className="h-4 w-4" />
            <p>Recycle</p>
          </div>
          <div className="flex gap-2 items-center bg-[#ECF6EC] p-2 rounded-lg mb-4">
            <img src="/assets/svg/control.svg" className="h-4 w-4" />
            <p>Pest Control</p>
          </div>
          <button className="inline-block bg-accent py-3 text-sm font-medium text-white rounded-xl">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
