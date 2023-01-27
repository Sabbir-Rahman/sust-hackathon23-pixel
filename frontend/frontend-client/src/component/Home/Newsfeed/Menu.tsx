import { useState } from "react";
import { DotsVerticalIcon, CheckIcon } from "@heroicons/react/outline";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="inline-flex items-stretch rounded-md border bg-white">
      <div className="relative">
        <button
          type="button"
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={() => setShowMenu(!showMenu)}
        >
          <DotsVerticalIcon className="w-5 h-6" />
        </button>
        {showMenu && (
          <div
            className="absolute right-0 z-10 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Report
              </a>
              <div className="flex items-center ml-4 gap-1">
                <CheckIcon className="w-5 h-5 text-accent" />
                <a
                  href="#"
                  className="block rounded-lg py-2 text-sm text-accent hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Mark as solved
                </a>
              </div>

              <form method="POST" action="#">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Post
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
