import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: () => fetch('/news.json')
            }
        ]

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news',
        element: <h2>News Layouts</h2>
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])

export default router


