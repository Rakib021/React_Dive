import { useReducer, useState } from "react";
import { movieContext, themeContext } from "./Context/index";
import Page from "./components/Page";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state,dispatch] = useReducer(cartReducer,initialState);

  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
}

