import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './Loaders/Loaders';
import Checkout from './components/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Shop/>
      },
      {
        path: "orders",
        element: <OrderReview/>,
        loader: cartProductLoader
      },
      {
        path: "inventory",
        element: <Inventory/>
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
