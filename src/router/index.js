import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../components/Login";
import AdminDashBoard from '../pages/admin/DashBoard'
import AdminHome from '../pages/admin/Components/AdminHome'
import EmployeeDashBoard from '../pages/employee/index'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'admin-dashboard',
        element:<AdminDashBoard/>,
        children:[
            {
                path:"",
                element:<AdminHome/>
            }
        ]
    },
    {
        path:'employee-dashboard',
        element:<EmployeeDashBoard/>
    }
])

export default router