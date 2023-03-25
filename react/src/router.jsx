import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Survey from "./views/Survey";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Dashboard />
    },
    {
        path : '/survey',
        element : <Survey />
    },
    {
        path : '/',
        element : <GuestLayout />,
        children : [
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/signup',
                element : <SignUp />
            },
        ]
    }
])

export default router;