import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import {Link} from "react-router-dom";

const Header = () =>{
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered");
    return (
        <div className="flex  justify-between shadow-sm bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56 " src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex  p-4  m-4">
                    <li className="px-4 ">Online Status: {!useOnlineStatus() ? "🔴":"🟢"}</li>
                    <li  className="px-4 "><Link to="/">Home</Link></li>
                    <li  className="px-4 "><Link to="/about">About us</Link></li>
                    <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 "><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 ">Cart</li>
                    <button className="login" onClick={ () =>{
                        
                        if(btnName === "Login"){
                            setBtnName("Logout");
                            alert("Logged In Successfully");
                        }else{
                            setBtnName("Login");
                            alert("Logged Out Successfully");
                        }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )

}
export default Header;