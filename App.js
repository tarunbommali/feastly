import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Help from "./src/components/Help";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

import Login from "./src/components/Login";

const Instamart = lazy(() => import("./src/components/Instamart"))

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {

            path: "/",
            element: <Body />,
        },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu/>
      },{
      path : "instamart" , 
      element : <Suspense fallback={<h1>...Loading</h1>}><Instamart /></Suspense>
      }
    ],
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
