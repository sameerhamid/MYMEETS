import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import Favourites from './pages/Favourites';
import NewMeetUps from './pages/NewMeetUps';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <AllMeetUps /> },
      { path: '/new-meetup', element: <NewMeetUps /> },
      { path: '/favourites', element: <Favourites /> },
    ]
  }
])
root.render(
  <RouterProvider router={router} />
);


