import React from "react";
import TopNavbar from "../components/navbar/topNavbar";
import { Button } from "@nextui-org/react";
const AddRoomAvail = () => {
  const highlights = [
    "Attached washroom",
    "Market nearby",
    "Attached balcony",
    "Close to metro station",
    "Public transport nearby",
    "Gated society",
    "No Restriction",
    "Newly built",
    "Separate washrooms",
    "House keeping",
    "Gym nearby",
  ];
  return (
    <>
      <div id="review_div">
        <TopNavbar />
        <div
          style={{ border: "3px solid #1a202c" }}
          className="sm:w-[38rem] shadow-[0px_8px_0px_0px_#1a202c]  w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
        >
          <div className=" px-10 py-10 text-center text-black">
            <p className="uppercase text-2xl font-semibold">
              Add your room Details
            </p>
            <p className="text-xs text-center uppercase mt-2">
              so that other users can contact you
            </p>
          </div>

          <div className="space-y-4 px-8 py-4">
            <label className="block" for="name">
              <p className="text-gray-600">Add your Location</p>
              <input
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Location"
              />
            </label>
            <label className="block" for="name">
              <p className="text-gray-600">Email Address</p>
              <input
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="email"
                placeholder="Enter your email"
              />
            </label>

            <div className="space-y-2">
              <p className="text-gray-600">Looking For </p>

              <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework1"
                  checked
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework1"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                <span>MALE</span>
              </div>
              <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework2"
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework2"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                <span className="mx-4">FEMALE</span>
              </div>
              <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework3"
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework3"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-emerald-400 ring-offset-2"></div>
                <span>ANY</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">Occupancy </p>

              <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework4"
                  checked
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework4"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                <span>SINGLE</span>
              </div>
              <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework5"
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework5"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                <span className="mx-4">SHARED</span>
              </div>
              <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework6"
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework6"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                <span className="mx-4">ANY</span>
              </div>
            </div>
            <h2 className="text- font-medium text-gray-700">
              Choose Highlights for your room
            </h2>
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
              {highlights.map((ele, i) => {
                return (
                  <div className="relative flex w-46 items-center rounded bg-gray-50 py-3 px-4 pl-14 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="checkbox"
                      name={`title+ ${i}`}
                      id={`title+ ${i}`}
                    />
                    <label
                      className="absolute left-0 top-0 h-full w-full cursor-pointer rounded-md border peer-checked:border-[#FE797A] peer-checked:bg-[#FE797A]"
                      for={`title+ ${i}`}
                    >
                      {" "}
                    </label>
                    <div className="absolute left-4 h-2 w-2 rounded-md border-2 border-gray-300 bg-gray-200 ring-[#FE797A] ring-offset-2 peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2"></div>
                    <span className="pointer-events-none text-xs whitespace-nowrap mx-8 z-10">
                      {ele}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">Do you want to make your mobile visible to others </p>

              <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="framework10"
                  checked
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework10"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                <span>YES MAKE IT PUBLIC</span>
              </div>
              <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="framework"
                  id="frameworK11"
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="framework11"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                <span className="mx-4">NO MAKE IT PRIVATE</span>
              </div>
             
            </div>
            <Button
              style={{ border: "1px solid #1a202c" }}
              target="_blank"
              variant="bordered"
              className="shadow-[0px_3px_0px_0px_#1a202c] "
            >
              Add Room
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRoomAvail;
