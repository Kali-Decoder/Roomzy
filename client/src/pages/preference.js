import React, { useState , useEffect} from "react";
import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import NightOwl from "../lib/img/preferences/owl.png";
import PartyLover from "../lib/img/preferences/party.png";
import EarlyBird from "../lib/img/preferences/bird.png";
import Studious from "../lib/img/preferences/books.png";
import FitnessFreak from "../lib/img/preferences/dumbbell.png";
import PetLover from "../lib/img/preferences/pet_lover.png";
import Vegan from "../lib/img/preferences/vegan.png";
import NonAlcoholic from "../lib/img/preferences/non_alcoholic.png";
import Sporty from "../lib/img/preferences/sporty.png";
import MusicLover from "../lib/img/preferences/music_lover.png";
import Wanderer from "../lib/img/preferences/wanderer.png";
import NonSmoker from "../lib/img/preferences/non_smoker.png";

  const prefers = [
    { title: "Night Owl", img: NightOwl },
    { title: "Party Lover", img: PartyLover },
    { title: "Early Bird", img: EarlyBird },
    { title: "Studious", img: Studious },
    { title: "Fitness Freak", img: FitnessFreak },
    { title: "Pet Lover", img: PetLover },
    { title: "Vegan", img: Vegan },
    { title: "Non Alcoholic", img: NonAlcoholic },
    { title: "Sporty", img: Sporty },
    { title: "Music Lover", img: MusicLover },
    { title: "Wanderer", img: Wanderer },
    { title: "Non Smoker", img: NonSmoker },
  ];


const Questionaries = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const navigator = useNavigate();
  // const handleCheckboxChange = (preference) => {
  //   setSelectedPreferences((prevSelected) => {
  //     if (prevSelected.includes(preference)) {
  //       return prevSelected.filter((item) => item !== preference);
  //     } else {
  //       return [...prevSelected, preference];
  //     }
  //   });
  //   console.log(selectedPreferences);
  // };
  const addPreferences = async () => {
    let id = toast.loading('Updating preferences...');
    const response = await fetch("https://roomzy-876.vercel.app/api/v1/user/preferences", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ preferences: selectedPreferences }),
    });
    const data = await response.json();
    toast.success('Preferences updated successfully!', { id });
    navigator("/profile");
    console.log(data);
  }

  const handleChange = (e) => {
    const {value, checked } = e.target;
    setSelectedPreferences((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  useEffect(() => {
    console.log(selectedPreferences);
  }, [selectedPreferences])


  return (
    <>
      <div>
        <section className="container mx-auto flex justify-center items-center flex-col">
          <h1 className="uppercase text-3xl text-center">Your Preference</h1>
          <p className="text-md text-gray-500 uppercase text-center mt-4">
            It will show others what kind of flatmate you prefer. <br /> Please
            select at least 5 preferences to update.
          </p>
          <div class="grid sm:grid-cols-5 grid-cols-2 w-2/3 gap-8 mt-8">
            {prefers.map((ele, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="relative overflow-hidden  flex  rounded-full items-center justify-center w-30 h-30 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      <input
                        className="peer hidden"
                        type="checkbox"
                        name="preferences"
                        value={ele.title}
                        id={`preferences${i}`}
                        checked={selectedPreferences.includes(ele.title)}
                        onChange={handleChange}
                      />
                      <label
                        className="peer-checked:border-[#FE797A] peer-checked:border-8 border absolute top-0 h-full w-full cursor-pointer rounded-full"
                        htmlFor={`preferences${i}`}
                      >
                        {" "}
                      </label>
                      <img src={ele.img} alt={ele.title} />

                    </div>
                    <span className=" uppercase text-sm mt-2 text-red-400 font-bold">
                      {ele.title}
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
            onClick={addPreferences}
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
