import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthPage from "./pages/AuthPage";
import CarsPage from "./pages/CarsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>wtf are you doing maaaaan???</h2>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }

])

root.render(
    <RouterProvider router={browserRouter}/>
);


reportWebVitals();
