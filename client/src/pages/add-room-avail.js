import React from "react";
import TopNavbar from "../components/navbar/topNavbar";
import MapIcon from '../lib/icons/map-pin-simple-area-bold.svg';
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

  const amenties = [
    "TV",
    "Fridge",
    "Kitchen",
    "Wifi",
    "Washing Machine",
    "AC",
    "Parking",
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
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="text"
                placeholder="Location"
              />
            </label>
            <label className="block" for="name">
              <p className="text-gray-600">Email Address</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="email"
                placeholder="Enter your email"
              />
            </label>

            <div className="space-y-2">
              <p className="text-gray-600">Looking For </p>
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
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">Occupancy </p>
              <div class="grid sm:grid-cols-2 grid-cols-2 gap-2">
                <div className="relative flex  items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
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
                <div className="relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
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
                <div className="relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
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
              <p className="text-gray-600">
                Do you want to make your mobile visible to others{" "}
              </p>

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
              <p className="text-xs mt-3">
                NOTE* : If your phone number is private other can ontact you
                through telegram
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">Amenties</p>

              <div class="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {amenties.map((ele, i) => {
                  return (
                    <>
                      <div className="flex flex-col justify-center items-center">
                        <div className="relative overflow-hidden flex border  rounded-full items-center justify-center w-25 h-25 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          <input
                            className="peer hidden"
                            type="checkbox"
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

      <div
        class="max-w-xl mx-auto p-6 bg-white rounded shadow-[0px_8px_0px_0px_#1a202c] my-6"
        style={{ border: "3px solid #1a202c" }}
        id="invoice"
      >
        <div class="grid grid-cols-2 items-center">
          <div>
            <span
              style={{ color: "black" }}
              className="font-extrabold text-3xl text-black text-inherit align-middle"
            >
              Room
              <img src={MapIcon} alt="map" className="inline-block ml-1" />
              zy
            </span>
          </div>

          <div class="text-right">
            <p>Tailwind Inc.</p>
            <p class="text-gray-500 text-sm">sales@tailwindcss.com</p>
            <p class="text-gray-500 text-sm mt-1">+41-442341232</p>
            <p class="text-gray-500 text-sm mt-1">VAT: 8657671212</p>
          </div>
        </div>

        <div class="grid grid-cols-2 items-center mt-8">
          <div>
            <p class="font-bold text-gray-800">Bill to :</p>
            <p class="text-gray-500">
              Laravel LLC.
              <br />
              102, San-Fransico, CA, USA
            </p>
            <p class="text-gray-500">info@laravel.com</p>
          </div>

          <div class="text-right">
            <p class="">
              Invoice number:
              <span class="text-gray-500">INV-2023786123</span>
            </p>
            <p>
              Invoice date: <span class="text-gray-500">03/07/2023</span>
              <br />
              Due date:<span class="text-gray-500">31/07/2023</span>
            </p>
          </div>
        </div>

        <div class="-mx-4 mt-8 flow-root sm:mx-0">
          <table class="min-w-full">
            <thead class="border-b border-gray-300 text-gray-900">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Items
                </th>
                
                <th
                  scope="col"
                  class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="max-w-2/3 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="font-medium text-gray-900">
                    E-commerce Platform
                  </div>
                  <div class="mt-1 truncate text-gray-500">
                    Laravel based e-commerce platform.
                  </div>
                </td>
               
                <td class="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  $5,000.00
                </td>
              </tr>

              <tr class="border-b border-gray-200">
                <td class="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="font-medium text-gray-900">Frontend Design</div>
                  <div class="mt-1 truncate text-gray-500">
                    Frontend design using Vue.js and Tailwind CSS.
                  </div>
                </td>
               
                <td class="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  $5,000.00
                </td>
              </tr>
             
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class=" pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Subtotal
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Subtotal
                </th>
                <td class="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                  $10,500.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class=" pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Tax
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Tax
                </th>
                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                  $1,050.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class=" pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Discount
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Discount
                </th>
                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                  - 10%
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class=" pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                >
                  Total
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                >
                  Total
                </th>
                <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                  $11,550.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddRoomAvail;
