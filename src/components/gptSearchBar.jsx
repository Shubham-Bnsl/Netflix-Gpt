import React from "react";

import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const gptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
      <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className=" p-4 m-4  col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className=" m-5 px-2 py-2 col-span-3 bg-red-600 text-white rounded">
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default gptSearchBar;
