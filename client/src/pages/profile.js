import React, { useContext, useState } from "react";
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
      <div className="flex-col w-full items-center  flex mt-4">
        <main className=" w-1/2  max-h-screen">
          <div className="px-6 py-8">
            <div className=" mx-auto">
              <div className="bg-white rounded-3xl p-8 mb-5">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
                  alt="Rounded avatar"
                />
                <h1 className="text-xl font-bold mt-4">Neeraj Choubisa</h1>
                <p className="mt-2">
                  ✅ Full Stack Developer ✅ Frontend Development ✅ Backend
                  Development ✅ Blockchain Developer ✅ Integration Web2 to
                  Web3 / Wallet Integration ✅
                </p>
                <div className="flex gap-3 mt-2">
                  <div className="h-6 w-6">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                  <div className="h-6 w-6">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                  <div className="h-6 w-6">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-10">
                  <div className="flex items-stretch">
                    <div className="text-gray-400 text-xs">
                      Members
                      <br />
                      connected
                    </div>
                    <div className="h-100 border-l mx-4"></div>
                    <div className="flex flex-nowrap -space-x-3">
                      <div className="h-9 w-9">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://ui-avatars.com/api/?background=random"
                        />
                      </div>
                      <div className="h-9 w-9">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://ui-avatars.com/api/?background=random"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="bi bi-chat-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                    >
                      Open
                    </button>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="grid grid-cols-2 gap-x-20">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Stats</h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <div className="p-4 bg-green-100 rounded-xl">
                          <div className="font-bold text-xl text-gray-800 leading-none">
                            Good day, <br />
                            Kristin
                          </div>
                          <div className="mt-5">
                            <button
                              type="button"
                              className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                            >
                              Start tracking
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">
                          20
                        </div>
                        <div className="mt-2">Rooms Listed</div>
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">
                          4.5
                        </div>
                        <div className="mt-2">Ratings</div>
                      </div>
                      <div className="col-span-2">
                        <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                          <div className="font-bold text-xl leading-none">
                            Your daily plan
                          </div>
                          <div className="mt-2">5 of 8 completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Your Rooms History
                    </h2>

                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">Number 10</div>
                          <div className="text-gray-400 text-xs">4h</div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          Blog and social posts
                        </a>
                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          Deadline is today
                        </div>
                      </div>
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">
                            Grace Aroma
                          </div>
                          <div className="text-gray-400 text-xs">7d</div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          New campaign review
                        </a>
                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          New feedback
                        </div>
                      </div>
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">Petz App</div>
                          <div className="text-gray-400 text-xs">2h</div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          Cross-platform and browser QA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
