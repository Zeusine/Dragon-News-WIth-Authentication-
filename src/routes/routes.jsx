import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Middle from '../components/LayoutComponent/Middle';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Pages/Login';
import Register from '../components/Pages/Register';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                // this is redirecting the "http://localhost:5176/" to "http://localhost:5176/category/01"
                path: "",
                element: <Navigate to="/category/0"></Navigate>

            },
            {
                path: "/category/:id",
                element: <Middle></Middle>
            }
        ]
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>

            },
            {
                path: "/auth/register",
                element: <Register></Register>

            },

        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },

])



export default routes;