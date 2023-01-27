const SellServiceBanner = () => {
  return (
    <div className="fixed top-36 right-10">
      <div className="bg-white shadow-md rounded-2xl p-4 w-[300px] flex flex-col gap-4">
        <p className="text-lg font-medium">Want to sell your own service?</p>
        <p className="text-sm text-lightGray">
          Create a seller ID now and instantly start listing your services!
        </p>
        <button className="inline-block bg-accent py-3 text-sm font-medium text-white rounded-xl">
          Add
        </button>
      </div>
    </div>
  );
};

export default SellServiceBanner;
