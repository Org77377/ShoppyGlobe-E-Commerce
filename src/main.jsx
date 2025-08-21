// import { StrictMode } from 'react'
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import { Home } from './components/Home.jsx';
import { NotFound } from './components/Notfound.jsx';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store.js';

const ProductList = lazy(() => import("./components/ProuctList.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"))
const CartItem = lazy(() => import("./components/CartItem.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>,
      },
      {
        path: "/product/:product",
        element: <ProductDetails />
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element:
        <Suspense fallback={<div>Loading...</div>}>
          <About/>
        </Suspense>
      },
      {
        path: "/cart",
        element:
          <Suspense fallback={<div>Loadting...</div>}>
            <CartItem />
          </Suspense>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>
)
