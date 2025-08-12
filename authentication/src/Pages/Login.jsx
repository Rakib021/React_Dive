import React, { useState } from "react";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSocialLogin = async () =>{
    const user = await signInWithGoogle();
    console.log(user);
    navigate('/home');
  }
  return (
    <div className="flex flex-col p-4 justify-center items-center border border-gray-500 ">
      <h1 className="text-3xl my-2">SignIn</h1>
      <form className="flex flex-col border p-4 rounded-md border-gray-600">
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email Address"
            className="mx-2 my-2 p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
            className="mx-2 my-2 p-1 border border-gray-300 rounded-md"
          />
        </div>
        <button
          className="bg-sky-600 text-white rounded-md mx-auto p-2 my-2 mx-2"
          onClick={handleLogin}
        >
          SignIn
        </button>
        <button
          className="bg-black text-white rounded-md mx-auto p-2 my-2"
          onClick={handleSocialLogin}
        >
          SignIn With Google
        </button>
      </form>
      <p>
        No Account ?{" "}
        <NavLink className="underline text-bold text-red-900" to="/register">
          Register
        </NavLink>
      </p>
      <p>
        Forgot Password ?{" "}
        <NavLink className="underline text-bold text-red-900" to="/reset">
          Reset Your password
        </NavLink>
      </p>
    </div>
  );
}
