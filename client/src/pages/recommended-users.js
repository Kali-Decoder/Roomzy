import React, { useState } from "react";

const RecommendedUsers = () => {
  const [activeTag, setActiveTag] = useState("all");
  const tags = ["all", "woman", "man", "actor", "editor"];
  const users = [
    {
      firstname: "Lelah",
      lastname: "Nicholson",
      country: "Troy, MI",
      tags: ["clothes", "vintage", "actor", "woman", "all"],
      photo: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      firstname: "Jane",
      lastname: "Nicholson",
      country: "Austin, TX",
      tags: ["actor", "woman"],
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      firstname: "James",
      lastname: "Webb",
      country: "Fort Worth, TX",
      tags: ["man", "editor"],
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      firstname: "Deborah",
      lastname: "Smith",
      country: "Cincinnati, OH",
      tags: ["woman", "actor"],
      photo: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      firstname: "Leo",
      lastname: "Gold",
      country: "Austin, TX",
      tags: ["editor", "man", "art"],
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  ];
  return (
    <>
      <div
        id="app"
        className="grid grid-cols-12 min-h-screen items-center max-w-screen-lg mx-auto py-10 px-5 gap-x-3 place-content-center"
      >
        <h1 className="capitalize col-span-12 text-left mb-5 text-3xl font-bold">
          Clients List as Per your Recommended Tags
        </h1>
        <form className="col-span-12 md:col-span-6">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5  text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs"
              placeholder="Search by location"
              required
            />
          </div>
        </form>
        <div className="tags mt-5 md:mt-0 col-span-12 md:col-span-6 md:justify-self-end">
          <ul className="flex items-center flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <li
                  key={tag}
                  className={`
            'apitalize text-sm uppercase hover:bg-indigo-600 cursor-pointer hover:text-white py-2 px-5 rounded-md cursor-pointer'
            ${activeTag === tag ? "active" : ""}`}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
       
        <div className="col-span-12 grid grid-cols-12 gap-5 mt-12">
          {users.map((user) => {
            return (
              <div style={{ border: "3px solid #1a202c" }} className="col-span-12 shadow-[0px_4px_0px_0px_#1a202c] md:col-span-6 lg:col-span-4 sm:flex  rounded-lg p-5 gap-5 h-full border border-transparent cursor-pointer hover:shadow-lg ">
                <img
                  src={user.photo}
                  alt="user.firstname"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="text-left mt-3 sm:mt-0">
                  <h2 className="text-lg font-semibold">
                    {user.firstname} {user.lastname}
                  </h2>
                  <span className="block mb-4">{user.country}</span>
                  <ul className="flex flex-wrap gap-1 items-center">
                    {user.tags.map((tag) => {
                      return (
                        <li
                          key={tag}
                          className="rounded-full uppercase bg-white px-2 py-0.5 text-[8px] text-indigo-500 border border-gray-300"
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
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
