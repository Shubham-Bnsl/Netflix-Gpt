import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const videoTitle = ({ title, overview }) => {
  return (
    <div className=" px-16 pt-[20%] absolute bg-gradient-to-r from-black text-white w-full aspect-video">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-6 w-1/3 text-lg">{overview}</p>
      <div className="flex items-center">
        <button className="bg-white text-black font-medium p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 flex items-center">
          <span className="">
            <PlayIcon fontSize="medium" />
          </span>{" "}
          <span>Play Now</span>
        </button>
        <button className="bg-gray-500 text-white font-medium p-4 px-10 mx-2 text-xl bg-opacity-50 rounded-lg ">
          <div className="flex items-center justify-center">
            <span className="flex items-center justify-center">
              <InfoOutlinedIcon fontSize="small" />
            </span>
            <span className="">More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
