import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../components/Login";
import AdminDashBoard from '../pages/admin/index'
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
        element:<AdminDashBoard/>
    },
    {
        path:'employee-dashboard',
        element:<EmployeeDashBoard/>
    }
])

export default router