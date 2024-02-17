import React from "react";
import NetflixLogo from "../Netflix_Logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
    }).catch((error) => {
          navigate("./error")
    });
    
  }
  return (
    <div className="z-10 px-8 py-2 w-screen absolute bg-black bg-opacity-80 flex justify-between">
      <img className="w-44 " src={NetflixLogo} alt="logo" />
      {user && <div className="flex justify-between p-2 items-center">
        <img
          className="w-12 h-12 p-2"
          src={user.photoURL}
          alt="image"
        />
        <button onClick={handleSignOut} className="text-white font-bold">(Sign out)</button>
      </div>}
    </div>
  );
};

export default header;
