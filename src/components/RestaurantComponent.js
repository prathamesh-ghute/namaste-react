import {CDN_URL} from "../utils/constants";

const styleCard = {
    // backgroundColor : "#f0f0f0",
    
}

// inline styling method 1
const RestaurantCard = (props) => {
    const{resData }= props;

    const {cloudinaryImageId,name,costForTwo,avgRating,sla,cuisines} = resData?.info;
    const{slaString} = sla;
    return(
        <div className="res-card m-4 p-4 w-64 rounded-lg bg-gray-100   hover:bg-gray-200 " style={styleCard} onClick={() =>{
            
        }}>
            <img className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>⭐{avgRating} , {slaString}</h4>
            {/* <h4>{resData.info.sla.slaString}</h4> */}
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;