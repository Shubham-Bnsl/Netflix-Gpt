import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
          console.log(error)
    });
    
  }


  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
        
        // User is signed out
        // ...
      }
    });

    return () => unsubscribe;
  }, []);

  
  return (
    <div className="z-10 px-8 py-2 w-full absolute bg-gradient-to-b from-black bg-opacity-80 flex justify-between">
      <img className="w-44 " src={LOGO} alt="logo" />
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
