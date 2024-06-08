import React from "react";

import { Button } from "@nextui-org/react";

const Questionaries = () => {
  const prefers = [
    "Night Owl",
    "Party Lover",
    "Early Bird",
    "Studious",
    "Fitness Freak",
    "Pet Lover",
    "Vegan",
    "Non Alcoholic",
    "Sporty",
    "Music Lover",
    "Wanderer",
    "Non Smoker",
  ];
  return (
    <>
      <div>
        <section className="container mx-auto flex justify-center items-center flex-col">
          <h1 className="uppercase text-3xl text-center">Your Preference</h1>
          <p className="text-md text-gray-500 uppercase text-center mt-4">
            It will show others what kind of flatmate you prefer. <br /> Please
            select at least 5 preferences to update.
          </p>
          <div class="grid sm:grid-cols-5 grid-cols-2 w-2/3 gap-4 mt-8">
            {prefers.map((ele, i) => {
              return (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative overflow-hidden flex rounded-full items-center justify-center w-30 h-30 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      <input
                        className="peer hidden"
                        type="checkbox"
                        name="amenties"
                        id={`amenties${i}`}
                      />
                      <label
                        className="peer-checked:border-[#FE797A] peer-checked:border-4 absolute top-0 h-full w-full cursor-pointer rounded-full border"
                        for={`amenties${i}`}
                      >
                        {" "}
                      </label>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s"
                        alt="img"
                      />
                    </div>
                    <span className=" uppercase text-sm mt-2 text-red-400 font-bold">
                      {ele}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <Button
            style={{
              border: "1px solid #1a202c",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            variant="bordered"
            className="shadow-[0px_3px_0px_0px_#1a202c] py-3  mt-12 uppercase"
          >
            Add Preferences
          </Button>
        </section>
      </div>
    </>
  );
};

export default Questionaries;
