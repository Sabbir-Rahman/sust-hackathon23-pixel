const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-accent my-12"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
