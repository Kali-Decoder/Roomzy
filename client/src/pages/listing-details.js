import React from "react";
import TopNavbar from "../components/navbar/topNavbar";
import { Button } from "@nextui-org/react";
import TickIcon from "../lib/icons/tick.svg";

const highlightStyle = {
  
  backgroundColor: "#F3F4F6",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
  color: "black",
  fontSize: "0.75rem",
  fontWeight: 600,
};

const Profile = () => {
  return (
    <>
      <div id="listing_div">
        <TopNavbar />
        <div className="grid sm:grid-cols-2 grid-cols-1 border gap-4 mx-auto container justify-items-center">
          <div className="flex flex-col sm:w-[24rem] ">
            <div
              style={{ border: "3px solid #1a202c" }}
              className="shadow-[0px_8px_0px_0px_#1a202c] w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mt-4">
                  <Button
                    style={{ border: "1px solid #1a202c" }}
                    variant="bordered"
                    className="shadow-[0px_3px_0px_0px_#1a202c] w-32 py-3 uppercase"
                  >
                    Call
                  </Button>
                  <Button
                    style={{ border: "1px solid #1a202c" }}
                    variant="bordered"
                    className="shadow-[0px_3px_0px_0px_#1a202c] w-32 py-3 uppercase"
                  >
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ border: "3px solid #1a202c" }}
            className="sm:w-[56rem]  shadow-[0px_8px_0px_0px_#1a202c] w-[95%] my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg "
          >
            <div className=" px-4 py-8 text-black sm:px-8">
              <p className="uppercase text-xl font-semibold text-center">
                Location
              </p>
              <p className="mt-4 text-center">San Francisco, CA</p>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Basic Info
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-semibold">Gender</p>
                  <p>Female</p>
                </div>
                <div>
                  <p className="font-semibold">Approx Rent</p>
                  <p>$1500/month</p>
                </div>
                <div>
                  <p className="font-semibold">Occupancy</p>
                  <p>2</p>
                </div>
                <div>
                  <p className="font-semibold">Looking For</p>
                  <p>Roommate</p>
                </div>
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Preferences
              </p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-gray-600">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Preference Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Preference Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Preference Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Preference Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Preference Name</span>
                </div>
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Highlights
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div
                  style={highlightStyle}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={TickIcon}
                    className="w-4 h-4 mr-2"
                    alt="Tick Icon"
                  />
                  <span>Non Alcoholic</span>
                </div>
                <div
                  style={highlightStyle}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={TickIcon}
                    className="w-4 h-4 mr-2"
                    alt="Tick Icon"
                  />
                  <span>Fitness Freak</span>
                </div>
                <div
                  style={highlightStyle}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={TickIcon}
                    className="w-4 h-4 mr-2"
                    alt="Tick Icon"
                  />
                  <span>Sporty</span>
                </div>
                <div
                  style={highlightStyle}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={TickIcon}
                    className="w-4 h-4 mr-2"
                    alt="Tick Icon"
                  />
                  <span>Night Owl</span>
                </div>
                <div
                  style={highlightStyle}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={TickIcon}
                    className="w-4 h-4 mr-2"
                    alt="Tick Icon"
                  />
                  <span>Party Lover</span>
                </div>
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Amenities
              </p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-gray-600">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Amenity Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Amenity Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Amenity Name</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Preference"
                    className="w-20 h-20 rounded-full border"
                  />
                  <span className="text-center mt-4">Amenity Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
