import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () =>{
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");
    const data = useContext(UserContext);
    
    console.log("Header Rendered",data);
    return (
        <div className="flex  justify-between shadow-sm bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56 " src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex  p-4  gap-2">
                    <li className="px-4 ">Online Status: {!useOnlineStatus() ? "🔴":"🟢"}</li>
                    <li  className="px-4 "><Link to="/">Home</Link></li>
                    <li  className="px-4 "><Link to="/about">About us</Link></li>
                    <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 "><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 ">Cart</li>
                    <button className="login bg-black text-white p-2 hover:bg-amber-700 cursor-pointer" onClick={ () =>{
                        
                        if(btnName === "Login"){
                            setBtnName("Logout");
                            alert("Logged In Successfully");
                        }else{
                            setBtnName("Login");
                            alert("Logged Out Successfully");
                        }
                    }}>{btnName}</button>
                <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )

}
export default Header;