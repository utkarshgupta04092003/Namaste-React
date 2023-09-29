import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import App from './App';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantDetails from './components/RestaurantDetails';
import Profile from './components/Profile';
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

