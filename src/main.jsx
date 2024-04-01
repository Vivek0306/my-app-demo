import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import CoursePage from './pages/CoursePage.jsx';
import CartPage from './pages/CartPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { CartProvider } from './context/CartContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>,
)
