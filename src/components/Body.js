// import {resList} from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantComponent";
import Shimmer from "./Shimmer";
// import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState , useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () =>{
    // Local State Variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] =useState([]);
    const [searchText, setSearchText] = useState("");
    // const [userText, setusertext] = useState("");

    // passing the component to higher order component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const handleTopRatedClick = () => {
        const filteredList = filteredRestaurant.filter((res) =>{
            return res.info.avgRating > 4;
        })
        setFilteredRestaurant(filteredList);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4472008&lng=73.8256852");
        
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h1>Looks Like you're offline!! Please check your internet connection;</h1>
    }
    // Conditional Rendering 
    // if the list is empty => loading...
    // if(listOfRestaurants.length === 0){
    //     // return <h1>Loading....</h1>
    //     return <Shimmer />;
    // }
    // whenever state variable changes react re-renders the component
    console.log("Body Rendered",listOfRestaurants);
   
    const {setUsername, loggedInUser} = useContext(UserContext);


    return listOfRestaurants.length === 0?  <Shimmer /> : (
       
        <div className="body">
        
            <div className="filter flex">
                <div className="search m-4 p-4">
            <input type="text"  className="search-box border border-solid border-black" value={searchText} onChange={(e) =>{
                setSearchText(e.target.value)}}/>
            <button className="search-btn  px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ () =>{
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
            <div className="search m-4 p-4 items-center">
                <button className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={handleTopRatedClick}>Top Rated Restaurants</button>
            </div>

                <div>
                    <label for="user" >UserName :</label>
                    <input type="text" className="search-box border border-solid border-black" name="user" id="user" value={loggedInUser} onChange={(e) =>{
                setUsername(e.target.value)}} />
                

                </div>
            </div>
         {/* inline styling 2 method  style={{backgroundColor : "rgba(255, 255, 255, 1)"}}*/}
            <div className="res-conatainer flex flex-wrap" >
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
                    filteredRestaurant.map((restaurant) =>( 
                        <Link 
                            key={restaurant.info.id} 
                            to={"/restaurant/"+restaurant.info.id}
                        > 
                    { 
                    restaurant.info.veg ? <RestaurantCardPromoted resData={restaurant} /> :<RestaurantCard  resData={restaurant} />
                    }
                        </Link>
                )
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