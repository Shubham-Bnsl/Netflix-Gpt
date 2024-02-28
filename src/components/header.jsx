import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });

    return () => unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-10 px-8 py-2 w-full absolute bg-gradient-to-b from-black bg-opacity-80 flex justify-between">
      <img className="w-44 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          
          {showGptSearch && <select
            className="bg-slate-800 p-2 m-2 rounded text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}

          <button
            className="px-4 py-1 mx-4 my-2 bg-purple-700 text-white rounded"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ?"Home page":"Seach Gpt"}
          </button>
          <img className="w-12 h-12 p-2" src={user.photoURL} alt="image" />
          <button onClick={handleSignOut} className="text-white font-bold">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default header;
