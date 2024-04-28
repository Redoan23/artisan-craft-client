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
import ItemDetails from "../Pages/ItemDetails";
import Update from "../Pages/Update";
import Error from "../Pages/Error";
import Subcategory from "../Pages/Subcategory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/artisan')
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
                loader: () => fetch('http://localhost:5000/artisan')
            },
            {
                path: '/myartandcraft/:email',
                element: <PrivateRoute><MyArtandCraftList></MyArtandCraftList></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/artisan/arts/${params.email}`)
            },
            {
                path: '/addcraft',
                element: <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>
            },
            {
                path: '/itemdetails/:id',
                element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/artisan/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/home/:subcategory',
                element: <Subcategory></Subcategory>,
                loader: ({params}) => fetch(`http://localhost:5000/artisan/arts/check/${params.subcategory}`)
            }
        ]
    },

]);


export default router;