import React from "react";
import TopNavbar from "../components/navbar/topNavbar";
import Preferences from "../components/ui/Preference";

const ProfilePage = () => {
  return (
    <>
      <TopNavbar />
      <div className="container mx-auto flex-col items-center flex mt-4">
        <div class="py-4 px-8 flex flex-row justify-between sm:w-1/3 w-[100%] hover:shadow-xl cursor-pointer mt-10 mx-auto bg-white rounded-xl sm:border-3 border-dotted  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            class="block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://tailwindcss.com/img/erin-lindford.jpg"
            alt="Woman's Face"
          />
          <div class=" space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg  text-black font-semibold">Nikku Choubisa</p>
              <p class="text-slate-500 font-medium">Product Developer</p>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Connect
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 sm:mt-10 mt-2 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-2">
          <div class="flex flex-col w-full p-4 border-3 border-dotted rounded-lg">
            <h1 class="mb-4 text-2xl font-bold text-gray-900">Rewards %</h1>
            <div
              id="profile-progress"
              class="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
            >
              75%
            </div>
            <div class="font-bold text-center text-gray-900">
              Rewards Earned
            </div>
          </div>
          <div class="max-w-md  border-3 border-dotted rounded-lg bg-white p-6 pb-10 text-gray-900">
            <p class="text-lg font-medium">Roommate's History</p>
            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-sm">@nikku876 : TON Bootcamp Event </p>
            </div>

            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam deserunt cupiditate ipsa.
              </p>
            </div>
            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div class="max-w-md border-3 border-dotted rounded-lg  bg-white p-6 pb-10 text-gray-900">
            <p class="text-lg font-medium">Your Activity</p>
            <div class="flex items-center py-2">
              <img
                class="h-10 w-10 rounded-full object-cover"
                src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                alt="Simon Lewis"
              />
              <p class="ml-4 w-56">
                <strong class="block font-medium">Albert Mcalister</strong>
                <span class="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a class="truncate font-medium text-indigo-600" href="#">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
            <div class="flex items-center py-2">
              <img
                class="h-10 w-10 rounded-full object-cover"
                src="/images/fR71TFZIDTv2jhvKsOMhC.png"
                alt=""
              />
              <p class="ml-4 w-56">
                <strong class="block font-medium">Samantha Ribbon</strong>
                <span class="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a class="truncate font-medium text-indigo-600" href="#">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
            <div class="flex items-center py-2">
              <img
                class="h-10 w-10 rounded-full object-cover"
                src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
                alt=""
              />
              <p class="ml-4 w-56">
                <strong class="block font-medium">Dr. Kayla</strong>
                <span class="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a class="truncate font-medium text-indigo-600" href="#">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>

          <Preferences />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
