import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantComponent";
import React from "react";
import { useState } from "react";
const Body = () =>{
    // Local State Variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const handleTopRatedClick = () => {
        const filteredList = listOfRestaurants.filter((res) =>{
            return res.info.avgRating > 4;
        })
        setListOfRestaurants(filteredList);
    }
    
    return(
        <div className="body">
            {/* <div className="search">
            <button>Search</button>
            </div> */}
            <div className="filter">
                <button className="filter-btn" onClick={handleTopRatedClick}>Top Rated Restaurants</button>
            </div>
         {/* inline styling 2 method  style={{backgroundColor : "rgba(255, 255, 255, 1)"}}*/}
            <div className="res-conatainer" >
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[9]}/> */}
                {
                    // using unique id as key
                    // it is recommanded to use unique id as key
                    listOfRestaurants.map((restaurant) =>( <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                    )
                }
                {/* {// using index as key 
                // it is not recommanded to use index as key but in case of no unique id we can use index as key
                    listOfRestaurants.map((restaurant,index) =>( <RestaurantCard key={index} resData={restaurant} />)
                    )
                } */}
            </div>
        </div>
    )
}

export default Body;