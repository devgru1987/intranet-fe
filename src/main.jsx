import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'
import Navigation from './components/Partials/Navigation';
import ErrorPage from './components/Pages/ErrorPage';
import AddEvents from './components/Pages/AddEvents';
import Finance from './components/Pages/Finance';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';
import HR from './components/Pages/HR';
import ICT from './components/Pages/ICT';
import Legal from './components/Pages/Legal';
import Marketing from './components/Pages/Marketing';
import OfficeOfTheCEO from './components/Pages/OfficeOfTheCEO';
import Sales from './components/Pages/Sales';
import Operations from './components/Pages/Operations';
import Policy from './components/Pages/Policy';
import Login from './components/Pages/Login';
import PolicyUpload from './components/Pages/PolicyUpload';
import GalleryUpload from './components/Pages/GalleryUpload';
import Events from './components/Pages/Events';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [

      { index: true, element: <Home /> },
      {
        path: "/addevents",
        element: <AddEvents />
      },
      {
        path: "/finance",
        element: <Finance />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/hr",
        element: <HR />
      },
      {
        path: "/ict",
        element: <ICT />
      },
      {
        path: "/legal",
        element: <Legal />
      },
      {
        path: "/marketing",
        element: <Marketing />
      },
      {
        path: "/ceo",
        element: <OfficeOfTheCEO />
      },
      {
        path: "/sales",
        element: <Sales />
      },
      {
        path: "/operations",
        element: <Operations />
      },
      {
        path: "/policies",
        element: <Policy />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/policyupload",
        element: <PolicyUpload />
      },
      {
        path: "/galleryupload",
        element: <GalleryUpload />
      },
      {
        path: "/events",
        element: <Events />
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
