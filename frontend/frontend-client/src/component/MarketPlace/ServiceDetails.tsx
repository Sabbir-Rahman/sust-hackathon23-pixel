import Layout from "../Common/Layout";
import ProductInfo from "./ProductInfo";
import ProductSidebar from "./ProductSidebar";

const ServiceDetails = () => {
  return (
    <Layout>
      <div className="w-full bg-bgColor flex">
        <div className="w-3/4">
          <ProductInfo />
        </div>
        <div className="w-1/4">
          <ProductSidebar />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
