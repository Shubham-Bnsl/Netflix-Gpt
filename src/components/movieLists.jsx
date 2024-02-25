import React from "react";
import MovieCard from "./movieCard";

const movieLists = ({ title, movies }) => {
  return (
    <div className="px-6  ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className=" overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default movieLists;
