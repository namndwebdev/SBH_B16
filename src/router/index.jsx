import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from '@/page/Home'
import Login from '@/page/Login'
const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [{
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        }]
    },
]);  

export default router