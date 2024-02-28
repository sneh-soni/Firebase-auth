import React, { useState } from "react";
import { BG_URL } from "../utils/constants";
import { auth, db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const backgroundStyles = {
    backgroundImage: `url(${BG_URL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null,
    status: "active",
  });

  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      await addDoc(collection(db, "users"), { ...user });
      await createUserWithEmailAndPassword(auth, user.email, user.password);
    } catch (error) {
      console.error("Error Signing up the user: ", error);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate("/weather");
    } catch (error) {
      console.log("Error logging in the user: ", error);
    }
  };

  return (
    <div
      style={backgroundStyles}
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="bg-white bg-opacity-80 rounded-md h-fit w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
        <h1 className="text-black w-full text-center font-semibold m-2 text-3xl">
          {!isLogin ? "Sign Up" : "Login"}
        </h1>
        {!isLogin && (
          <div className="flex flex-col my-2 w-4/5">
            <label className="text-lg">User name</label>
            <input
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="name"
              className="p-2 rounded-md focus:outline-blue-600"
            />
          </div>
        )}
        <div className="flex flex-col my-2 w-4/5">
          <label className="text-lg">E mail</label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="email"
            className="p-2 rounded-md focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col my-2 w-4/5">
          <label className="text-lg">Password</label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="password"
            className="p-2 rounded-md focus:outline-blue-600"
          />
        </div>
        {!isLogin ? (
          <button
            className="w-1/2 my-4 bg-blue-700 px-4 py-2 rounded-md text-white text-lg"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        ) : (
          <button
            className="w-1/2 my-4 bg-blue-700 px-4 py-2 rounded-md text-white text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        {!isLogin ? (
          <p className="text-black my-4 p-2">
            Already Signed Up?{" "}
            <span
              className="underline hover:cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-black my-4 p-2">
            Don't have an account?{" "}
            <span
              className="underline hover:cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              SignUp here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
