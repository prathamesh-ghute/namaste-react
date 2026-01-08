import React  from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));


// component composition
const AppLayout = () => {
    console.log("AppLayout Rendered");
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children:[
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    },
    
])
root.render(<RouterProvider router={appRouter} />);