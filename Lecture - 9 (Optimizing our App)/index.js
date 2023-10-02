import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import { lazy, Suspense } from 'react';

import App from './App';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantDetails from './components/RestaurantDetails';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart'; // normal loading


const Instamart = lazy(()=>import('./components/Instamart'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },{
        path: '/about',
        element: <About/>,
        children:[{
          path: 'profile',
          element: <Profile/>
        }]
      },
      {
        path: '/contact',
        element: <Contact/>
      },{
        path: '/restaurant/:id',
        element: <RestaurantDetails/>
      },{
        path: '/instamart',
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);

