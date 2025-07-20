import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import {movieContext} from './Context/index';

export default function App() {
  const [cartData,setCartData] = useState([]);


  return (
    <>
    <movieContext.Provider value={{cartData,setCartData}}>

      <Header />

      <main>
       <div className="primary mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
      </movieContext.Provider>
    </>
  );
}
