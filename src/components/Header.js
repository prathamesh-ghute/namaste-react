import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () =>{
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                   
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
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