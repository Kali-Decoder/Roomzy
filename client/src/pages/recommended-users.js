import React, { useState } from "react";
import LocationIcon from "../lib/icons/location.svg";
import TelegramIcon from "../lib/icons/telegram.svg";
import TopNavbar from "../components/navbar/topNavbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Filter from "../components/user-list/Filter";

const RecommendedUsers = ({title}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const users = [
    {
      firstname: "Lelah",
      lastname: "Nicholson",
      telegram_username: "@lelah",
      location: "Troy, MI",
      gender_preference: "female",
      distance: "5 miles",
      rent: 10000,
      photo: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      firstname: "Jane",
      lastname: "Nicholson",
      telegram_username: "@jane",
      location: "Austin, TX",
      gender_preference: "female",
      distance: "10 miles",
      rent: 12000,
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      firstname: "James",
      lastname: "Webb",
      telegram_username: "@james",
      location: "Fort Worth, TX",
      gender_preference: "male",
      distance: "15 miles",
      rent: 15000,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      firstname: "Deborah",
      lastname: "Smith",
      telegram_username: "@deborah",
      location: "Cincinnati, OH",
      gender_preference: "female",
      distance: "20 miles",
      rent: 11000,
      photo: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      firstname: "Leo",
      lastname: "Gold",
      telegram_username: "@leo",
      location: "Austin, TX",
      gender_preference: "male",
      distance: "25 miles",
      rent: 13000,
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const name = `${user.firstname} ${user.lastname}`.toLowerCase();
    const location = user.location.toLowerCase();
    const rent = user.rent.toString().toLowerCase();
    return (
      name.includes(searchQuery.toLowerCase()) ||
      location.includes(searchQuery.toLowerCase()) ||
      rent.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="items-center md:mx-12 mx-2 px-5">
      <TopNavbar />

      <div className=" min-h-screen items-center mt-4 md:mx-4 px-2 gap-x-3">
        <h1 className="capitalize text-left mb-5 text-2xl font-bold">
          {title}
        </h1>
        <div className="items-center  flex flex-row justify-between w-full flex-wrap gap-3">
          <Filter />
          <div className=" md:col-span-6">
            <div className="relative w-full">
              
              <input
                type="text"
                id="default-search"
                className="block px-4 py-3 my-2 pl-10 pr-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400 appearance-none"
                placeholder="Search Here.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 items-center justify-between mb-5 md:mt-12 mt-6">
          {filteredUsers.map((user) => (
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
                <div className="flex flex-row items-center gap-2 mt-2">
                  <span className="block text-gray-500 text-[12px]">
                    Rent
                  </span>
                  <span className="block text-gray-800 text-sm font-semibold">
                    ₹{user.rent}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="grid grid-cols-3 my-4 gap-4 xs:my-2">
                    <div className="flex flex-col">
                      <span className="block text-gray-500 text-[12px]">
                        Gender Preference
                      </span>
                      <span className="block text-gray-800 text-sm font-semibold first-letter:capitalize">
                        {user.gender_preference}
                      </span>
                    </div>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedUsers;

