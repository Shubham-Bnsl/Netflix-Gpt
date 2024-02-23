import React from "react";
import Header from "./header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryConatiner" 


const Browser = () => {
 
    useNowPlayingMovies();
  return (
    <div>
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
