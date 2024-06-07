import React, { useState } from "react";
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

  const amenties = [
    "TV",
    "Fridge",
    "Kitchen",
    "Wifi",
    "Washing Machine",
    "AC",
    "Parking",
  ];

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    lookingFor: "",
    maxRoommates: "",
    highlights: [],
    availableFrom: "",
    availableTill: "",
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const transformedData = {
        members_max: formData.maxRoommates,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pin_code: formData.pincode,
        country: formData.country,
        price: formData.price,
        looking_for:formData.lookingFor,
        available_from: formData.availableFrom,
        available_to: formData.availableTill,
        highlights: formData.highlights,
        amenities: formData.amenities, 
      };
      console.log(transformedData);
      const token=localStorage.getItem('token');
      console.log(token);
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
      const response = await fetch("https://freely-mate.vercel.app/api/v1/rooms/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWUxMWQwNmViODQ4MmY0YjhlYmYwNiIsImlhdCI6MTcxNzc4Njk1MywiZXhwIjoxNzE4MzkxNzUzfQ.KEvkR8W_hGqr6lCVOXqRObT2PQkUx94zNmxA_8X3fN8`
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        alert("Room details added successfully!");
        setFormData({
          address: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          lookingFor: "",
          maxRoommates: "",
          highlights: [],
          availableFrom: "",
          availableTill: "",
          amenities: [],
        });
      } else {
        alert("Error adding room details.");
      }
    } catch (error) {
      alert("Network error.");
    }
  };


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
            <label className="block" htmlFor="address">
              <p className="text-gray-600">Add your Address</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="text"
                name="address"
                placeholder="Location"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            <div className="flex gap-4 flex-row justify-between items-center">           
            <label className="block" htmlFor="city">
                <p className="text-gray-600">City</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
              <label className="block" htmlFor="state">
                <p className="text-gray-600">State</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex gap-4 flex-row justify-between items-center">           
            <label className="block" htmlFor="country">
                <p className="text-gray-600">Country</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </label>
              <label className="block" htmlFor="pincode">
                <p className="text-gray-600">Pincode</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Looking For </p>
              <div class="grid sm:grid-cols-2 grid-cols-2 gap-2">
                <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                     className="peer hidden"
                     type="radio"
                     name="lookingFor"
                     id="lookingForMale"
                     value="Male"
                     checked={formData.lookingFor === "Male"}
                     onChange={handleChange}
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    htmlFor="lookingForMale"
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
                    name="lookingFor"
                    id="lookingForFemale"
                    value="Female"
                    checked={formData.lookingFor === "Female"}
                    onChange={handleChange}
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
                    name="lookingFor"
                    id="lookingForAny"
                    value="Any"
                    checked={formData.lookingFor === "Any"}
                    onChange={handleChange}
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
              <p className="text-gray-600">Max roommates needed </p>
              <div class="grid sm:grid-cols-3 grid-cols-2 gap-2">
                <div className="relative flex  items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="maxRoommates"
                    id="maxRoommates1"
                    value="1"
                    checked={formData.maxRoommates === "1"}
                    onChange={handleChange}
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    htmlFor="maxRoommates1"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                  <span>1</span>
                </div>
                <div className="relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="maxRoommates"
                    id="maxRoommates2"
                    value="2"
                    checked={formData.maxRoommates === "2"}
                    onChange={handleChange}
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    htmlFor="maxRoommates2"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                  <span className="mx-4">2</span>
                </div>
                <div className="relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="maxRoommates"
                    id="maxRoommates3"
                    value="3"
                    checked={formData.maxRoommates === "3"}
                    onChange={handleChange}
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    for="maxRoommates3"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                  <span className="mx-4">3</span>
                </div>
              </div>
            </div>
            <h2 className="text- font-medium text-gray-700">
              Choose Highlights for your room
            </h2>
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
              {highlights.map((ele, i) => {
                return (
                  <div key={i} className="relative flex w-46 items-center rounded bg-gray-50 py-3 px-4 pl-14 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="checkbox"
                      name="highlights"
                      id={`highlight-${i}`}
                      value={ele}
                      checked={formData.highlights.includes(ele)}
                      onChange={handleChange}
                    />
                    <label
                      className="absolute left-0 top-0 h-full w-full cursor-pointer rounded-md border peer-checked:border-[#FE797A] peer-checked:bg-[#FE797A]"
                      htmlFor={`highlight-${i}`}
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
              {/* <p className="text-gray-600">
                Do you want to make your mobile number visible to others{" "}
              </p> */}

              {/* <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="mobileVisibility"
                  id="mobileVisibilityYes"
                  value="public"
                  checked={formData.mobileVisibility === "public"}
                  onChange={handleChange}
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  htmlFor="mobileVisibilityYes"
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
                  name="mobileVisibility"
                  id="mobileVisibilityNo"
                  value="private"
                  checked={formData.mobileVisibility === "private"}
                  onChange={handleChange}
                />
                <label
                  className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                  for="mobileVisibilityNo"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                <span className="mx-4">NO MAKE IT PRIVATE</span>
              </div>
              <p className="text-xs mt-3">
                NOTE* : If your phone number is private other can ontact you
                through telegram
              </p> */}
              <label className="block" htmlFor="availableFrom">
              <p className="text-gray-600">Available From</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="date"
                name="availableFrom"
                id="availableFrom"
                value={formData.availableFrom}
                onChange={handleChange}
              />
            </label>

            <label className="block" htmlFor="availableTill">
              <p className="text-gray-600">Available Till</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="date"
                name="availableTill"
                id="availableTill"
                value={formData.availableTill}
                onChange={handleChange}
              />
            </label>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">Amenties</p>

              <div class="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {amenties.map((ele, i) => {
                  return (
                  
                      <div  key={i}  className="flex flex-col justify-center items-center">
                        <div className="relative overflow-hidden flex border  rounded-full items-center justify-center w-25 h-25 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          <input
                            className="peer hidden"
                            type="checkbox"
                            name="amenities"
                            id={`amenities${i}`}
                            value={ele}
                            checked={formData.amenities.includes(ele)}
                            onChange={handleChange}
                          />
                          <label
                            className="peer-checked:border-[#FE797A] peer-checked:border-2 absolute top-0 h-full w-full cursor-pointer rounded-full border"
                            for={`amenties${i}`}
                          >
                            {" "}
                          </label>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s" alt="img" />
                        </div>
                        <span className=" font-bold text-xs mt-2">{ele}</span>
                      </div>
                  
                  );
                })}
              </div>
            </div>
            <Button
              style={{ border: "1px solid #1a202c" }}
              variant="bordered"
              className="shadow-[0px_3px_0px_0px_#1a202c] w-full"
              onClick={handleSubmit}
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
