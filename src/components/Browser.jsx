import React from "react";
import Header from "./header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryConatiner" 
import useTrendingMovies from "../hooks/useTrendingMovies";


const Browser = () => {
 
    useNowPlayingMovies();
    useTrendingMovies();
  return (
    <div className="" >
      <Header />
      <MainContainer/>
      <SecondaryContainer />
      
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
