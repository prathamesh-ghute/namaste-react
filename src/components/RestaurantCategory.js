import { useState } from 'react';
// import React {useState}from 'react'
import ItemList from './itemList';
const RestaurantCategory = (props) => {
    const {data,showItem, setShowIndex,dummy,index}= props;
    // const [showItem , setShowItem] = useState(false);
    // console.log("callllllllllll");
    const handleClick = () =>{
        // setShowItem(!showItem)
        // setShowIndex() 
         setShowIndex(showItem ? null : index);
        // showItem ? showItem: !showItem;
        // console.log("hello ",setShowIndex(showItem));
        console.log("hello1 ",showItem);
        
        
    }
   
  return (
    <div>
        {/* Header */}
        {/* <h1>RestaurantCategory</h1> */}
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
                <span >⬇️</span>
            </div>
                {showItem && <ItemList
                 items={data.itemCards}
                dummy={dummy}/>}
        </div>

        {/* menu */}
        
    </div>
  )
}

export default RestaurantCategory