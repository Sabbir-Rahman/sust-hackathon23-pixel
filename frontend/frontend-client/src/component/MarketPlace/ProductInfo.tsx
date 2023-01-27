import { StarIcon } from "@heroicons/react/outline";

const ProductInfo = () => {
  return (
    <div className="bg-white p-8 h-screen">
      <img
        src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="details-page"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <div className="flex items-center justify-between mt-4">
        <div className="space-y-2">
          <p className="text-4xl font-medium">Recycle Plastic</p>
          <p className="text-lg text-lightGray">Uttara, Dhaka</p>
          <div className="flex gap-1 items-center">
            <StarIcon className="h-5 w-5 text-accent" />
            <StarIcon className="h-5 w-5 text-accent" />
            <StarIcon className="h-5 w-5 text-accent" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold text-accent text-right mb-4">
            Tk. 1250
          </p>
          <button className="bg-accent text-white py-2 px-12 rounded-2xl">
            Contact Seller
          </button>
        </div>
      </div>
      <p className="text-sm text-lightGray mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
        impedit esse rem nostrum veniam? Optio temporibus nam quam dolorem
        laboriosam officiis rem veniam iste quasi eligendi enim maiores
        similique quaerat recusandae nihil, asperiores ad delectus. Consequuntur
        ipsa provident libero architecto, dolores iusto laborum deleniti,
        repellat aut nemo eligendi et, veritatis est. Rem expedita inventore
        ipsum fugiat cupiditate, temporibus amet quo quaerat iure ad culpa
        molestias similique at! Veritatis, repellat.
      </p>
    </div>
  );
};

export default ProductInfo;
