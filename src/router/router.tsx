import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";

export const routerConfig = createBrowserRouter(  /*ctrl + B - documents*/
    [
        {path:'/',
            element:<MainLayout/>,
            errorElement: <h2>What are you need HERE????</h2>,
            children: [ /*children it`s -  <Outlet/> in your layout*/
                {index: true, element: <HomePage/>},
                {path:'users', element:<UsersPage/>},
                {path:'users/:id', element:<UserPage/>},
                {path:'users/:id/post', element:<PostsPage/>,
                children: [
                    {path:'post/:id/comments', element:<CommentsPage/>}
                ]
                },
                // {path:'post/:id/comments', element:<CommentsPage/>}
            ]
        },

    ]
);