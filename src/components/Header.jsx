import { useState } from "react";
import { usePocket } from "~/context/PocketBase";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = usePocket();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleOnMouseDown = (e) => {
    logout();
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-screen-xl">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pocket Base App
            </span>
          </a>
          <div className="flex relative items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
              id="user-menu-button"
              onMouseDown={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <span className="flex justify-center items-center w-8 h-8 rounded-full dark:text-white dark:bg-gray-700">
                GP
              </span>
            </button>
            {showDropdown && (
              <div
                className="absolute right-0 top-6 z-50 my-4 text-base list-none bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Gopher Pocket
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 truncate">
                    joe@pockbaseapp.io
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      className="block py-2 px-4 w-full text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onMouseDown={handleOnMouseDown}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex justify-center items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:order-1 md:w-auto"
            id="navbar-user"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:p-0 md:mt-0 md:space-x-8 md:bg-white md:border-0 dark:bg-gray-800 dark:border-gray-700 rtl:space-x-reverse md:dark:bg-gray-900">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:p-0 md:text-blue-700 md:bg-transparent md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
