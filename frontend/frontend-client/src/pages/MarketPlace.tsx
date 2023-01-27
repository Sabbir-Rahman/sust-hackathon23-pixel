import Layout from "../component/Common/Layout";
import AddService from "../component/MarketPlace/AddService";
import FilterOptions from "../component/MarketPlace/FilterOptions";
import ProductList from "../component/MarketPlace/ProductList";
import SellServiceBanner from "../component/MarketPlace/SellServiceBanner";

const MarketPlace = () => {
  return (
    <div>
      <Layout>
        <div className="w-full bg-bgColor">
          <div className="w-full flex flex-col items-center justify-center pt-12">
            <h2 className="text-3xl font-medium text-accent mb-4">
              Service That Impacts
            </h2>
            <div className="flex h-10 items-center justify-start rounded-lg">
              <input
                className="outline-0 ml-2 w-[500px] py-2 px-4"
                placeholder="Search"
                type="text"
              />
              <button className="bg-accent py-2 px-6 text-white">Search</button>
            </div>
          </div>
          {/* Post Problem */}
          <div className="flex w-full mt-12">
            <div className="w-1/4">
              <FilterOptions />
            </div>
            {/* Newsfeed */}
            <div className="w-2/4">
              <ProductList />
            </div>
            {/* Home Navigation */}
            <div className="w-1/4">
              <SellServiceBanner />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MarketPlace;
