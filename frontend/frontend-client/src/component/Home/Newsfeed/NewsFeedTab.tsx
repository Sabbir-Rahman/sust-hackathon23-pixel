const NewsFeedTab = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-2xl text-accent font-semibold">Problem Around You</h1>
      <div>
        <ul className="flex border-b border-gray-100">
          <li className="flex-2">
            <a className="relative block py-4 px-8" href="#">
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-accent" />
              <div className="flex items-center justify-center">
                <span className="ml-3 text-sm font-medium text-accent">
                  Locally
                </span>
              </div>
            </a>
          </li>
          <li className="flex-2">
            <a className="relative block py-4 px-8" href="#">
              <div className="flex items-center justify-center">
                <span className="ml-3 text-sm font-medium text-lightGray">
                  Globally
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewsFeedTab;
