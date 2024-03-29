import React, { useRef, useState } from "react";
import Header from "./header";
import { validateforms } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BackgroundIMG_URL, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const togglebutton = () => {
    setSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickButton = () => {
    let nameValue = isSignIn ? "Signin" : name.current.value;
    const message = validateforms(
      email.current.value,
      password.current.value,
      nameValue
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Already registered");
          // ..
        });
    } else {
      // Signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Credentials!");
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img className="h-screen object-cover md:h-auto md:object-contain" src={BackgroundIMG_URL} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" text-white bg-black p-12 absolute w-full md:w-3/12  my-36 left-0 mx-auto right-0 bg-opacity-80  "
      >
        <h1 className="py-4 text-2xl font-semibold ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4  w-full  bg-gray-700"
          type="text"
          placeholder="Email-address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full  bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600  font-bold">{errorMessage}</p>
        <button
          onClick={handleClickButton}
          className="p-4 my-6 w-full font-semibold rounded bg-red-600 "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 cursor-pointer" onClick={togglebutton}>
          {isSignIn
            ? "New to Netflix? SignUp Now"
            : "already registered? SignIn Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
