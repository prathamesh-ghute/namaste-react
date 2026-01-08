import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import resData from "../utils/resData";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  // console.log(resId);


  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    // // const data = await fetch("https://api.allorigins.win/raw?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4472008&lng=73.8256852&restaurantId=279904&catalog_qa=undefined&submitAction=ENTER");

    // const data = await fetch(MENU_API_URL+resId);
    // const json = await data.json();

    // console.log(json);
    const data = await resData;
    // console.log(data);

    // console.log(data[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    // console.log(data[0]?.data?.cards[2]?.card?.card?.info);
    setResInfo(resData);
    // setResInfo(json.data);
  }
  // console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const{name,cuisines,costForTwo} = resInfo[0]?.data?.cards[2]?.card?.card?.info;

  // console.log("name",name);
  
  const itemCards = resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
 
  // console.log("item card ",itemCards);

  
  return (
    <div className="menu">
       <h1>Restaurant Name:  {name}</h1> 
      <p>
        cuisines: {cuisines.join(", ")}
         - cost for two: {costForTwo/100}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
        <li key={item.card.info.id}>
          
          {item.card.info.name} - {" Rs."} 
           {item.card.info.defaultPrice / 100}
        </li>
      ))}
      </ul>
      <h1>Menu Component Under Construction...</h1>
    </div>
  );

}

export default RestaurantMenu;
