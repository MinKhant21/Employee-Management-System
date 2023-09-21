import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../components/Login";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
    },
    {
        path:'login',
        element:<Login/>
    }
])

export default router