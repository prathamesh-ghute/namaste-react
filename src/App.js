import React,{lazy, Suspense, useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));


const Grocery = lazy(() => import("./components/Grocery") );

// component composition
const AppLayout = () => {

    // authentication 
    const [username, setUsername] = useState();

    useEffect(() =>{

        const data = {
            name : "Akshay Saini",
        }
        setUsername(data.name)
    },[])


    console.log("AppLayout Rendered");
    return (

    <UserContext.Provider value={{loggedInUser:username, setUsername}}>

        
        <div className="app">
             <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
                <Header />
            </UserContext.Provider>
            <Outlet />
        </div>
    </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children:[
            {
                // path : "/",
                index: true,
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
            },
             {
                path : "/grocery",
                element :<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense> 
            }
        ],
        errorElement : <Error />
    },
    
])
root.render(<RouterProvider router={appRouter} />);