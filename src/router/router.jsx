import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../Components/User/Users";
import Details from "../Components/User/Details";
import Update from "../Components/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/details",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/user/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },
    ],
  },
]);
