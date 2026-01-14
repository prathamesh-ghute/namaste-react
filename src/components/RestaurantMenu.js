import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import resData from "../utils/resData";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const [resInfo, setResInfo] = useState(null);

  const [showIndex ,setShowIndex] = useState(null);
  // console.log(resId);
  // custom hook
  const resInfoCustom = useRestaurantMenu(resId);

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
  // console.log("Menu :",resInfo);

  if (resInfo === null) return <Shimmer />;

  const{name,cuisines,costForTwo} = resInfo[0]?.data?.cards[2]?.card?.card?.info;

  // console.log("name",name);
  
  // const itemCards = resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
   const categories = resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>{
      return c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ;
    }
   );

  // console.log("categories :",categories);

  
  return (
    <div className="text-center">
       <h1 className="font-bold my-6 text-2xl">Restaurant Name:  {name}</h1> 
      <p className="font-bold text-lg">
        cuisines: {cuisines.join(", ")}
         - cost for two: {costForTwo/100}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
        <li key={item.card.info.id}>
          
          {item.card.info.name} - {" Rs."} 
           {item.card.info.defaultPrice / 100}
        </li>
      ))}
      </ul> */}
      <h1>Menu Component Under Construction...</h1>

      {/* categories accodions */}
      {
      categories.map((category,index) =>{
        
        return(
          <RestaurantCategory key={index}  
          dummy={dummy} 
          data={category?.card?.card}  
          showItem={index === showIndex ? true : false}  index={index} setShowIndex={setShowIndex}
          />
        )
      })
      }


      <h1>Footer</h1>
    </div>
  );

}

export default RestaurantMenu;
