import React, { useRef, } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";

import { API_OPTIONS, GEMINI_AI__KEY,  } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";


const gptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  const searchText = useRef(null)
  

  const searchMovieTMBD = async (movie)=>{
    
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
   
    return json.results
  }
  
  const dispatch = useDispatch();

  const handleGptSearch = async()=>{

    const genAI = new GoogleGenerativeAI(GEMINI_AI__KEY);    
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      const prompt = searchText.current.value+"give only 5 names of movies with seperated by , no other thing than movies names"
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      
      
      const gptResults = response.text().split(",")
      
      
      const promiseArray = gptResults.map((movie) => searchMovieTMBD(movie));
      const tmbdResults = await Promise.all(promiseArray);
      console.log(tmbdResults)

      dispatch(addGptMoviesResult({movieNames:gptResults, movieResults:tmbdResults}))
  }
  return (
      <div className="pt-[35%]  md:pt-[10%] flex justify-center">
      <form className=" w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault()}} >
        <input
          className=" p-4 m-4  col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder} ref={searchText}
        />
        <button className=" m-5 px-2 py-2 col-span-3 bg-red-600 text-white rounded" onClick={handleGptSearch} >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default gptSearchBar;
