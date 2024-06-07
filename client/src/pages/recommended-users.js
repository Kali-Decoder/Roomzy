import React, { useState } from "react";
import LocationIcon from "../lib/icons/location.svg";
import TelegramIcon from "../lib/icons/telegram.svg";
import FilterIcon from "../lib/icons/filter.svg";
import TopNavbar from "../components/navbar/topNavbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

const RecommendedUsers = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("all");
  const tags = ["all", "male", "female"];
  const [filterBox, setFilterBox] = useState(false);
  const users = [
    {
      firstname: "Lelah",
      lastname: "Nicholson",
      telegram_username: "@lelah",
      location: "Troy, MI",
      looking_for: "room",
      gender_preference: "female",
      distance: "5 miles",
      photo: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      firstname: "Jane",
      lastname: "Nicholson",
      telegram_username: "@jane",
      location: "Austin, TX",
      looking_for: "roommate",
      gender_preference: "female",
      distance: "10 miles",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      firstname: "James",
      lastname: "Webb",
      telegram_username: "@james",
      location: "Fort Worth, TX",
      looking_for: "roommate",
      gender_preference: "male",
      distance: "15 miles",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      firstname: "Deborah",
      lastname: "Smith",
      telegram_username: "@deborah",
      location: "Cincinnati, OH",
      looking_for: "room",
      gender_preference: "female",
      distance: "20 miles",
      photo: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      firstname: "Leo",
      lastname: "Gold",
      telegram_username: "@leo",
      location: "Austin, TX",
      looking_for: "room",
      gender_preference: "male",
      distance: "25 miles",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  ];

  const openFilter = () => {
    setFilterBox(!filterBox);
  };

  return (
    <>
      <TopNavbar />
      <div
        id="app"
        className="grid mb-12 grid-cols-12 min-h-screen items-center max-w-screen-lg mx-auto px-5 gap-x-3 place-content-center justify-center"
      >
        <h1 className="capitalize col-span-12 text-left mb-5 text-3xl font-bold">
          Listed Users
        </h1>
        <form className="col-span-12 md:col-span-6">
          {/* <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label> */}
          <div className="relative w-full">
            <div className="flex w-full absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            <input
              type="text"
              id="default-search"
              className="block p-4 pl-10 pr-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400 appearance-none"
              placeholder="Search by location"
              required
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <div
                className="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-300 rounded-full"
                onClick={() => openFilter()}
              >
                <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </form>
        {filterBox && (
          <div className="tags mt-5 md:mt-0 col-span-12 md:col-span-6 md:justify-self-end">
            <ul className="flex items-center flex-wrap gap-2">
              {tags.map((tag) => {
                return (
                  <li
                    key={tag}
                    className={`
            'capitalize text-sm uppercase hover:bg-red-400 cursor-pointer hover:text-white py-2 px-5 rounded-md cursor-pointer'
            ${activeTag === tag ? "all" : ""}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="col-span-12 grid grid-cols-8 gap-5 mt-12">
          {users.map((user) => {
            return (
              <div
                key={user.telegram_username}
                style={{
                  border: "3px solid #1a202c",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="col-span-12 shadow-[0px_4px_0px_0px_#1a202c] md:col-span-6 lg:col-span-4 sm:flex rounded-lg p-5 gap-5 h-full border border-transparent cursor-pointer hover:shadow-lg hover:transform hover:scale-105"
              >
                <img
                  src={user.photo}
                  alt={user.firstname}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="mt-3 sm:mt-0 w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <h2 className="text-lg font-semibold">
                      {user.firstname} {user.lastname}
                    </h2>

                    <div className="flex bg-red-300 w-auto px-4 py-1 rounded-xl items-center gap-2">
                      <span className="text-[14px] font-semibold tracking-wider">
                        {user.telegram_username}
                      </span>
                      <img
                        src={TelegramIcon}
                        alt="telegram"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2 mt-2">
                    <img src={LocationIcon} alt="map" className="w-5 h-5" />
                    <span className="text-gray-500 text-sm">
                      {user.location}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 my-4 gap-4 xs:my-2">
                    <div className="flex flex-col">
                      <span className="block text-gray-500 text-[12px]">
                        Rent
                      </span>
                      <span className="block text-gray-800 text-sm font-semibold">
                        ₹10000
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="block text-gray-500 text-[12px]">
                        Looking for
                      </span>
                      <span className="block text-gray-800 text-sm font-semibold first-letter:capitalize">
                        {user.looking_for}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="block text-gray-500 text-[12px]">
                        Looking for
                      </span>
                      <span className="block text-gray-800 text-sm font-semibold first-letter:capitalize">
                        {user.gender_preference}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <span className="block text-sm">
                      <b>{user.distance}</b>{" "}
                      <span className="text-xs">from your search</span>
                    </span>
                    <Button
                      onClick={() => navigate("/listing-details")}
                      style={{
                        border: "1px solid #1a202c",
                      }}
                      variant="bordered"
                      className="shadow-[0px_3px_0px_0px_#1a202c] w-[40%] py-3 mt-3 uppercase"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedUsers;
