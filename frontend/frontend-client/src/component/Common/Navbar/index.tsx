import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-16 w-full bg-accent flex items-center justify-between pl-8 pr-8 fixed top-0 left-0 right-0 z-30">
      <Link to="/">
        <img src="/assets/logoV2.svg" className="h-16 w-16" />
      </Link>
      <div className="flex h-10 items-center justify-start pl-2 bg-white rounded-lg w-1/3">
        <img src="/assets/svg/search.svg" alt="magnifying icon" />
        <input
          className="outline-0 ml-2 w-60"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center cursor-pointer p-2 rounded-lg transition ease-in-out delay-50">
        <img
          className="h-8 w-8"
          src="/assets/svg/avatar.svg"
          alt="magnifying icon"
        />
        <div className="ml-2 mr-2 text-white">Dami Soyombo</div>
        <img className="mt-0.5" src="/assets/svg/downArrow.svg" alt="select" />
      </div>
    </div>
  );
};

export default Navbar;
