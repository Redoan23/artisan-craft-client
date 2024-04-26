import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArt from "../Pages/AllArt";
import MyArtandCraftList from "../Pages/MyArtandCraftList";
import AddCraftItems from "../Pages/AddCraftItems";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('http://localhost:5000/artisan')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allart',
                element: <AllArt></AllArt>,
                loader:()=>fetch('http://localhost:5000/artisan')
            },
            {
                path: '/myartandcraft',
                element: <PrivateRoute><MyArtandCraftList></MyArtandCraftList></PrivateRoute>
            },
            {
                path: '/addcraft',
                element: <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>
            }
        ]
    },

]);


export default router;