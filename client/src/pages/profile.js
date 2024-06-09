import React, { useContext,useState } from "react";
import toast from "react-hot-toast";
import Preferences from "../components/ui/Preference";
import { UserContext } from "../context/userContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
 
  const handleCopyLink = () => {
    
    if (user && user._id) {
      const referralLink = `https://roomzy-nine.vercel.app/register-user?referralLink=${user._id}`;
      navigator.clipboard
        .writeText(referralLink)
        .then(() => {
          toast.success("Referral link copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy the link: ", err);
        });
    } else {
      toast.error("Failed to generate referral link");
    }
  };
  return (
    <>
      <div className="flex-col w-full items-center flex mt-4">
        <div className="py-4 px-4 flex flex-row justify-between hover:shadow-xl cursor-pointer mt-10 bg-white rounded-xl sm:border-3 border-dotted w-[100%] sm:w-2/3  space-y-2 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6 items-center">
          <img
            className="block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://tailwindcss.com/img/erin-lindford.jpg"
            alt="Woman's Face"
          />
          <div className=" w-full">
            <div className="">
              <p className="text-lg  text-black font-semibold">
                {user?.full_name || "Sneha here"}
              </p>
              <p className="text-slate-500 font-medium">
                {user?.bio || "Software Developer"}
              </p>
            </div>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Connect
            </button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button
              className="bg-red-300 rounded-md p-3 text-sm font-medium hover:bg-red-400 text-white whitespace-nowrap"
              onClick={handleCopyLink}
            >
              Generate Link
            </button>
            <p className="text-sm text-gray-500 font-mono text-center">
              Generate your Referral link to earn tokens
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-5 sm:mt-10 mt-2 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-2">
          <div className="flex flex-col p-4 border-3 border-dotted rounded-lg">
            <h1 className="mb-4 text-2xl font-bold text-gray-900">Rewards %</h1>
            <div
              id="profile-progress"
              className="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
            >
              {user?.rewards || 74}%
            </div>
            <div className="font-bold text-center text-gray-900">
              Rewards Earned
            </div>
          </div>
          <div className="max-w-md  border-3 border-dotted rounded-lg bg-white p-6 pb-10 text-gray-900">
            <p className="text-lg font-medium">Roommate's History</p>
            <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">@nikku876 : TON Bootcamp Event </p>
            </div>

            <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam deserunt cupiditate ipsa.
              </p>
            </div>
            <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 shrink-0 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="max-w-md border-3 border-dotted rounded-lg  bg-white p-6 pb-10 text-gray-900">
            <p className="text-lg font-medium">Your Activity</p>
            <div className="flex items-center py-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium">Albert Mcalister</strong>
                <span className="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a className="truncate font-medium text-indigo-600" href="/">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
            <div className="flex items-center py-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/fR71TFZIDTv2jhvKsOMhC.png"
                alt=""
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium">Samantha Ribbon</strong>
                <span className="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a className="truncate font-medium text-indigo-600" href="/">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
            <div className="flex items-center py-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
                alt=""
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium">Dr. Kayla</strong>
                <span className="text-xs text-gray-400">
                  {" "}
                  Commented on{" "}
                  <a className="truncate font-medium text-indigo-600" href="/">
                    An Evening in the Woods
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>

          <Preferences preferences = {user?.preferences?.preferences || []} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
