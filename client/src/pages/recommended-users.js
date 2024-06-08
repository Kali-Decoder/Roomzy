import React, { useState, useEffect } from "react";
import LocationIcon from "../lib/icons/location.svg";
import TelegramIcon from "../lib/icons/telegram.svg";

import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Filter from "../components/user-list/Filter";

const RecommendedUsers = ({ title }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const randomMatch = () => Math.floor(Math.random() * 50) + 51;
  // const users = [
  //   {
  //     firstname: "Lelah",
  //     lastname: "Nicholson",
  //     telegram_username: "@lelah",
  //     location: "Troy, MI",
  //     gender_preference: "female",
  //     distance: "5 miles",
  //     rent: 10000,
  //     photo: "https://randomuser.me/api/portraits/women/79.jpg",
  //   },
  //   {
  //     firstname: "Jane",
  //     lastname: "Nicholson",
  //     telegram_username: "@jane",
  //     location: "Austin, TX",
  //     gender_preference: "female",
  //     distance: "10 miles",
  //     rent: 12000,
  //     photo: "https://randomuser.me/api/portraits/women/68.jpg",
  //   },
  //   {
  //     firstname: "James",
  //     lastname: "Webb",
  //     telegram_username: "@james",
  //     location: "Fort Worth, TX",
  //     gender_preference: "male",
  //     distance: "15 miles",
  //     rent: 15000,
  //     photo: "https://randomuser.me/api/portraits/men/32.jpg",
  //   },
  //   {
  //     firstname: "Deborah",
  //     lastname: "Smith",
  //     telegram_username: "@deborah",
  //     location: "Cincinnati, OH",
  //     gender_preference: "female",
  //     distance: "20 miles",
  //     rent: 11000,
  //     photo: "https://randomuser.me/api/portraits/women/19.jpg",
  //   },
  //   {
  //     firstname: "Leo",
  //     lastname: "Gold",
  //     telegram_username: "@leo",
  //     location: "Austin, TX",
  //     gender_preference: "male",
  //     distance: "25 miles",
  //     rent: 13000,
  //     photo: "https://randomuser.me/api/portraits/men/40.jpg",
  //   },
  // ];

  const handleGetUsers = async () => {
    try {
     const token = localStorage.getItem("token");
     const response = await fetch("https://freely-mate.vercel.app/api/v1/rooms", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     });
      const res = await response.json();
      // Transform the data to match the expected user structure
      const transformedUsers = res.data.map((item) => ({
        full_name: item.user_id.full_name,
        telegram_username: item.user_id.username,
        location: `${item.city}, ${item.state}`,
        gender_preference: item.looking_for,
        distance: "5 km",
        rent: item.price,
        photo: item.user_id.profile_picture_url,
        room_id: item._id,
      }));
      console.log(transformedUsers);
      setUsers(transformedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const name = user.full_name?.toLowerCase();
    const location = user.location?.toLowerCase();
    const rent = user.rent?.toString();
    const query = searchQuery?.toLowerCase();
    return (
      name.includes(query) || location.includes(query) || rent.includes(query)
    );
  });

  return (
    <div className="items-center md:mx-12 px-5">
      

      <div className=" min-h-screen items-center mt-4 md:mx-4 gap-x-3">
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
              className="col-span-12 shadow-[0px_4px_0px_0px_#1a202c] md:col-span-6 lg:col-span-4 sm:flex rounded-lg p-5 gap-5 h-full border border-transparent cursor-pointer hover:shadow-lg hover:transform hover:scale-105 min-w-[340px] max-w-[430px] w-full"
            >
              <div className="flex flex-row sm:flex-col items-center justify-between">
                <img
                  src={user.photo}
                  alt={user.firstname}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="flex flex-col items-center justify-end gap-2">
                  <span className="text-gray-500 text-sm">Match</span>
                  <div
                    className="w-12 h-12 m-auto grid place-items-center text-sm font-bold"
                    style={{
                      position: "relative",
                      borderRadius: "50%",
                      border: "0.25em solid white",
                      borderRightColor: "#ff7a7a",
                      borderTopColor: "#ff7a7a",
                      borderBottomColor: "#ff7a7a",
                      borderLeftColor: "white",
                      // background: `conic-gradient(#ff7a7a ${user.match}%, white ${user.match}%)`,
                    }}
                  >
                    {`${randomMatch()}%`}
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 w-full">
                <div className="flex flex-row items-center justify-between w-full gap-4">
                  <h2 className="text-lg font-semibold">{user.full_name}</h2>

                  <div className="flex bg-red-300 w-fit-content px-2 sm:px-8 py-1 rounded-xl items-center gap-2">
                    <span className="text-[14px] font-semibold tracking-wider">
                      {user.telegram_username}
                    </span>
                    <img
                      src={TelegramIcon}
                      alt="telegram"
                      className="w-5 h-5 mr-1"
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-2">
                  <img src={LocationIcon} alt="map" className="w-5 h-5" />
                  <span className="text-gray-500 text-sm">{user.location}</span>
                </div>
                <div className="grid grid-cols-2 my-4 gap-4 xs:my-2">
                  <div className="flex flex-col">
                    <span className="block text-gray-500 text-[12px]">
                      Rent
                    </span>
                    <span className="block text-gray-800 text-sm font-semibold">
                      ₹{user.rent || 5000}
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
                <div className="flex flex-row w-full items-center justify-between ">
                  <span className="block text-sm ">
                    <b>{user.distance}</b>{" "}
                    <span className="text-xs">from your search</span>
                  </span>
                  <Button
                    onClick={() =>
                      navigate("/listing-details", {
                        state: { room_id: user.room_id },
                      })
                    }
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
