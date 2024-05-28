import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paths } from "./path.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import Profile from "./pages/Profile/Profile.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import ProductItem from "./components/Products/ProductItem.jsx";


const router = createBrowserRouter([
  {
    path: Paths.menu,
    element: <Menu />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.cart,
    element: <Cart />,
  },
  {
    path: Paths.profile,
    element: <Profile />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: "/:id",
    element: <ProductItem />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);
