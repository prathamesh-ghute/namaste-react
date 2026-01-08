
import { useState } from "react";
const User = ({user}) =>{
    const [count , setCount] = useState(0);
    return(
        <div className="user-card">
            <h1>User Component - function </h1>
            <h2>Name: {user}</h2>
            <h3>Location:</h3>
            <h4>Contact: </h4>
            <h4>Count : {count} </h4>
            <button onClick={() => {
                setCount(count+1);
            }}>Increment Count</button>
        </div>
    )
}

export default User;