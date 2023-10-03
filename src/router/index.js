import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../components/Login";
import AdminDashBoard from '../pages/admin/DashBoard'
import AdminHome from '../pages/admin/pages/AdminHome'
import EmployeeManagement from '../pages/admin/pages/EmployeeManagement'
import EmployeeDashBoard from '../pages/employee/index'
import CreatEmployee from "../pages/admin/components/CreatEmployee";
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
            },
            {
                path:"employee",
                element:<EmployeeManagement/>
            },
            {
                path:"create-employee",
                element:<CreatEmployee/>
            }
        ]
    },
    {
        path:'employee-dashboard',
        element:<EmployeeDashBoard/>
    }
])

export default router