import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>User Loading ...</p>;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1>Welcome To the Home Page ,Mr, {user.email}</h1>
      <button
        className="p-2 m-2 bg-purple-950 text-white rounded"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
}
