import React from "react";
import Header from "./header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryConatiner";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearch from "./gptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  useNowPlayingMovies();
  useTrendingMovies();

  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
        main container
          -Video bg
          -video title,description
          -buttons  
      
        secondary conatiner
          - Movies list*n
          - movies cards * n
          
      
      */}
    </div>
  );
};

export default Browser;
