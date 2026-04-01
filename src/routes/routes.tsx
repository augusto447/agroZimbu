import { Login } from "@/components/auth/login"
import { Register } from "@/components/auth/register"
import { AppLayout } from "@/components/layout/app"
import { AuthLayout } from "@/components/layout/auth"
import { HomePage } from "@/pages/home"
import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "@/pages/404"




export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                }
            ]

        },

        {
            element: <AuthLayout />,
            children: [
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                },

            ]
        },
        {
            path: "*",
            element: <NotFound />
        },





    ]
)