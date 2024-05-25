import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from '@/page/Home'
import Login from '@/page/Login'
import ProductDetail from '@/page/ProductDetail'
import Category from "@/page/Category";
import Brand from "@/page/Brand";
import Search from "@/page/Search";
import Profile from '@/page/Profile'
import PrivateRouter from "@/components/PrivateRouter";
import Signup from "@/page/Signup";
import Cart from '@/page/Cart'
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
            path: '/thuong-hieu/:nameBrand',
            element: <Brand/>
        },
        {
            path: '/timkiem',
            element: <Search/>
        },
        {
            path: '/thong-tin',
            element: <PrivateRouter>
                <Profile></Profile>
            </PrivateRouter>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/login',
            element: <Login/>
        },{
            path: '/signup',
            element: <Signup/>
        }]
    },
]);  

export default router