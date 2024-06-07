import React from "react";
import TopNavbar from "../components/navbar/topNavbar";
import { Button } from "@nextui-org/react";

const RegisterUser = () => {
  return (
    <>
      <div id="review_div">
        <TopNavbar />
        <div
          style={{ border: "3px solid #1a202c" }}
          className="sm:w-[38rem] shadow-[0px_8px_0px_0px_#1a202c]   w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
        >
          <div className=" px-10 py-10 text-center text-black">
            <p className="uppercase text-2xl font-semibold">
              Youare almost done
            </p>
            <p className="text-xs text-center uppercase mt-2">
              Please fill in the details to register
            </p>
          </div>

          <div className="space-y-4 px-8 py-4">
            <label className="block" for="name">
              <p className="text-gray-600">Full Name</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="text"
                placeholder="Nikku.jr.Dev"
              />
            </label>
            

            <div className="space-y-4">
              <p className="text-gray-600 mt-3">Gender</p>
              <div class="grid sm:grid-cols-2 grid-cols-2 gap-2">
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
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Who you are *</p>
              <div class="grid sm:grid-cols-1 grid-cols-1 gap-2">
                <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="flat"
                    id="flat1"
                    checked
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    for="flat1"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                  <span>YOU ARE FLAT OWNER</span>
                </div>
                <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="flat"
                    id="flat2"
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    for="flat2"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                  <span className="mx-4">YOU ARE NOT FLAT OWNER</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Choose your Avatar</p>

              <div class="grid sm:grid-cols-4 grid-cols-3 gap-4">
                {[1,2,4,5,6,7,8,9].map((ele, i) => {
                  return (
                    <>
                      <div className="flex flex-col justify-center items-center">
                        <div className="relative overflow-hidden flex border  rounded-full items-center justify-center w-20 h-20 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          <input
                            className="peer hidden"
                            type="radio"
                            name="amenties"
                            id={`amenties${i}`}
                          />
                          <label
                            className="peer-checked:border-[#FE797A] peer-checked:border-2 absolute top-0 h-full w-full cursor-pointer rounded-full border"
                            for={`amenties${i}`}
                          >
                            {" "}
                          </label>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s" />
                        </div>
                        <span className=" font-bold text-xs mt-2">{ele}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <Button
              style={{ border: "1px solid #1a202c",marginBottom:"20px" , marginTop:"20px" }}
              variant="bordered"
              className="shadow-[0px_3px_0px_0px_#1a202c] w-full py-3  mt-8 uppercase"
            >
              Register Your Self
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
