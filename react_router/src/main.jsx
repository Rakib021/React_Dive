import { StrictMode } from "react";
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Contact from "./components/Contact";
import { ContactsLoader, getContactLoader } from "./loader/ContactLoader";
import {
  createContactAction,
  deleteAction,
  editContactAction,
  favoriteAction,
} from "./actions/ContactAction";
import EditContact from "./EditContact";
import Index from "./Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: ContactsLoader,
    action: createContactAction,
   children:[
    {
      errorElement : <ErrorPage />,
       children: [
      {
        index :true,
        element:<Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
        action :favoriteAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
    }
   ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
