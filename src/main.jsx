import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import ProductList from './components/ProuctList.jsx';
import { ProductDetails } from './components/ProductDetails.jsx';
import { Home } from './components/Home.jsx';
import { NotFound } from './components/Notfound.jsx';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store.js';
import CartItem from './components/CartItem.jsx';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path:"/home",
        element: <Home/>,
      },
      {
        path:"/products",
        element: <ProductList/>,
      },
      {
        path:"/product/:product",
        element: <ProductDetails/>
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/cart",
        element: <CartItem/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
    </Provider>
)
