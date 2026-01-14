import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const ItemList = (props) => {
    const {items,dummy} = props;

    const dispatch = useDispatch();

    const handelAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));

    }
        
  return (
    <div>
        {/* <h1>{dummy}</h1> */}
        {
            items.map((item) =>{
                return(
                    <div  className='p-2 m-2  border-gray-200 b-2 text-left flex justify-between' key={item.card.info.id}>
                        <div className='w-9/12 '>
                            <div className='py-2'>
                            <span>{item.card.info.name}</span>
                            <span> 💸 {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
                        </div>
                            <p className='text-xs'>
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className='w-3/12 p-4'>
                            <div className='absolute '>
                                <button className='cursor-pointer p-2 mx-16 rounded-lg bg-black text-white shadow-lg ' onClick={() => handelAddItem(item)}>
                                    Add +
                                </button>
                            </div>
                            <img className='w-full' src={CDN_URL+item.card.info.imageId}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
};

export default ItemList;