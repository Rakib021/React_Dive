import { useState } from "react";
import { movieContext, themeContext } from "./Context/index";
import Page from "./components/Page";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
}

