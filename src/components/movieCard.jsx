import React, { useEffect, useState } from "react";
import { API_OPTIONS, IMG_URL } from "../utils/constants";
import Popup from "reactjs-popup";
import VideoBackground from "./videoBackground";

const movieCard = ({ posterpath, title, id ,desc}) => {
  if (!posterpath) return null;

  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getMoviesVideos = async (id) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos",
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };
    getMoviesVideos(id);
  },[id]);

  const description = desc.slice(0,200)
  return (
    <div>
      <div className="w-36 md:w-44 pr-4 relative">
        <Popup 
          trigger={<img src={IMG_URL + posterpath} alt="Poster-Image" />}
          position="center center"
        >
          {(close) => (
            <div className=" h-auto bg-black opacity-90 w-96 ">
              <div className="w-full aspect-video ">
                 <div className="flex justify-end">
                 <button
                className=" bg-red-600 text-white  w-10"
                onClick={close}
                >
                &times;
              </button>
                </div >
                <iframe
                  className="w-full "
                  src={
                    "https://www.youtube.com/embed/" +
                     trailerKey +
                    "?si=D4Fck8HoITkoetAv?&autoplay=1&mute=1&controls=0&loop=1" 
                  }
                  title="youtube video title"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 
                ></iframe>
              <div className="p-2 bg-black opacity-90">
                <h1 className="text-[15px] font-semibold text-white">{title}</h1>
                <span className="text-[10px] font-normal text-white">{description}</span>
              </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default movieCard;
