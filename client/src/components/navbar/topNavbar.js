import React from "react";
import MapIcon from "../../lib/icons/map-pin-simple-area-bold.svg";
export default function TopNavbar() {
  return (
    <header className="mb-2 px-4 shadow border">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <a className="flex items-center text-2xl font-black" href="/">
          <div className="flex">
            <span
              style={{ color: "black" }}
              className="font-extrabold text-3xl text-black text-inherit align-middle"
            >
              Room
              <img src={MapIcon} alt="map" className="inline-block ml-1" />
              zy
            </span>
          </div>
        </a>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          for="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6  sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <li className="">
              <a className="text-gray-600 hover:text-blue-600" href="#">
                Pricing
              </a>
            </li>
            <li className="">
              <a className="text-gray-600 hover:text-blue-600" href="#">
                Demo
              </a>
            </li>
            <li className="">
              <a className="text-gray-600 hover:text-blue-600" href="#">
                Support
              </a>
            </li>
            <li className="mt-2 sm:mt-0">
              <a
                className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
