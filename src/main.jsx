import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import ProductList from './components/ProuctList.jsx';
import { ProductDetail } from './components/ProductDeatil.jsx';   
import { Home } from './components/Home.jsx';
import { NotFound } from './components/Notfound.jsx';

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
        element: <ProductDetail/>
      },
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
)
