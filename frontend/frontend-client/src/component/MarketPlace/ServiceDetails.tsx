import ProductInfo from "./ProductInfo";
import ProductSidebar from "./ProductSidebar";

const ServiceDetails = () => {
  return (
    <div className="w-full bg-bgColor flex">
      <div className="w-3/4">
        <ProductInfo />
      </div>
      <div className="w-1/4">
        <ProductSidebar />
      </div>
    </div>
  );
};

export default ServiceDetails;
