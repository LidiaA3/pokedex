import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './scss/global.scss';
import Layout from './views/layout/Layout.jsx';
import ErrorPage from './views/errorpage/ErrorPage.jsx';
import Home from './views/home/Home.jsx';
import Detail from './views/detail/Detail.jsx';
import Favourites from './views/favourites/Favourites.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:pokeName",
        element: <Detail />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
