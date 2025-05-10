import React, { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

import Login from "./src/components/Login";
import UserContext from "./src/context/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/redux-store/appStore";
import AboutWrapper from "./src/components/AboutWrapper";

const Instamart = lazy(() => import("./src/components/Instamart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userInfo = { userName: "Developer" };
    setUserName(userInfo.userName);
  }, []);

  const onAddLogin = (userName) => {
    setUserName(userName);
  };

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userName, onAddLogin: onAddLogin }}
      >
        <div className="flex flex-col p-2 ">
          <Header />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about/:tabId",
        element: <AboutWrapper />, // functional wrapper for class component
        
      },
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<h1 className="text-center text-xl">...Loading</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
