import { useEffect, useState } from "react";
import resData from "./resData";
const useRestaurantMenu = (resId) =>{
    const [resInfoCustom, setResInfoCustom] = useState(null);
    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = () =>{
        const data = resData;
        setResInfoCustom(data);
    }

    return resInfoCustom;
}

export default useRestaurantMenu;