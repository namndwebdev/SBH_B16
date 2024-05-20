import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from '@/page/Home'
import Login from '@/page/Login'
import ProductDetail from '@/page/ProductDetail'
import Category from "@/page/Category";
const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [{
            path: '/',
            element: <Home/>
        },{
            path: '/sanpham/:slug',
            element: <ProductDetail/>
        },
        {
            path: '/danh-muc/:categorySlug',
            element: <Category/>
        },
        {
            path: '/login',
            element: <Login/>
        }]
    },
]);  

export default router