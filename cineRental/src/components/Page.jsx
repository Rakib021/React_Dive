import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { themeContext } from "../Context";

export default function Page() {
  const { darkMode } = useContext(themeContext);
  return (
   <div className={`h-full w-full ${darkMode ? "bg-white dark:bg-black" : "bg-white"}`}>

      <Header />

      <main>
        <div className="primary mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
