import {CDN_URL} from "../utils/constants";

const styleCard = {
    backgroundColor : "#f0f0f0",
    
}

// inline styling method 1
const RestaurantCard = (props) => {
    const{resData }= props;

    const {cloudinaryImageId,name,costForTwo,avgRating,sla,cuisines} = resData?.info;
    const{slaString} = sla;
    return(
        <div className="res-card" style={styleCard} onClick={() =>{
            
        }}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>⭐{avgRating} , {slaString}</h4>
            {/* <h4>{resData.info.sla.slaString}</h4> */}
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;