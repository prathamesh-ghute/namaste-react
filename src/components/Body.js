// import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantComponent";
import Shimmer from "./Shimmer";
// import React from "react";

import { useState , useEffect} from "react";
import {Link} from "react-router-dom";

const Body = () =>{
    // Local State Variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] =useState([]);
    const [searchText, setSearchText] = useState("");

    const handleTopRatedClick = () => {
        const filteredList = filteredRestaurant.filter((res) =>{
            return res.info.avgRating > 4;
        })
        setFilteredRestaurant(filteredList);
    }

    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4472008&lng=73.8256852");
        
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {
        fetchData();
    }, []);

    // Conditional Rendering 
    // if the list is empty => loading...
    // if(listOfRestaurants.length === 0){
    //     // return <h1>Loading....</h1>
    //     return <Shimmer />;
    // }
    // whenever state variable changes react re-renders the component
    console.log("Body Rendered");
   
    return listOfRestaurants.length === 0?  <Shimmer /> : (
       
        <div className="body">
        
            <div className="filter">
                <div className="search">
            <input type="text"  className="search-box" value={searchText} onChange={(e) =>{
                setSearchText(e.target.value)}}/>
            <button className="search-btn" onClick={ () =>{
                //filter the restraunt cards and update the UI
                // searchText
                // console.log("searchText", searchText);
                const filteredRestaurants = filteredRestaurant.filter( (res) =>{
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
            //     if(filteredRestaurants.length === 0){
            //         alert("No matching restaurant found");
            //         //return <h1>Not Found</h1>
            // }else{
                setFilteredRestaurant(filteredRestaurants);
            // }

            }}>Search</button>
            </div>
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
                    filteredRestaurant.map((restaurant) =>( <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>)
                    )
                }
                {/* {// using index as key 
                // it is not recommanded to use index as key but in case of no unique id we can use index as key
                    listOfRestaurants.map((restaurant,index) =>( <RestaurantCard key={index} resData={restaurant} />)
                    )
                } */}
            </div>
            <h1>use post method api from swiggy and make the body ui as a infinite scrolling </h1>
        </div>
    )
}

export default Body;