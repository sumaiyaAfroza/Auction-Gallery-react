import React from 'react';
import FavoriteList from './FavoriteList';
import { FaRegHeart } from "react-icons/fa";


const FavoriteLists = ({favItem, amount, btnRemove}) => {
  return (
    <div className=" text-center w-[30%] bg-white mt-44 rounded-lg p-4">

      <div className=' text-3xl flex justify-center  gap-2 border-b-2 border-b-neutral-400'>
      <h1 className='mt-1'><FaRegHeart /></h1>
      <h1 className=" gap-2 text-3xl font-bold mb-4 text-[#0E2954] ">Favorite Items</h1>
      </div>

      <div className='border-b-2 border-b-neutral-400 '>
        {favItem.length === 0 ? (
          <div className='my-4'>
            <p className="text-gray-900 text-2xl mb-2 font-semibold">No favorites yet.</p>
            <p> Click the heart icon on any item <br /> to add it to your favorites</p>
          </div>
        ) : (
          favItem.map((list) => (
            <FavoriteList 
              btnRemove={btnRemove} 
              key={list.id} 
              list={list} 
            />
          ))
        )}
      </div>

      <div className='flex justify-between font-semibold px-2 mt-2 text-black'>
        <h1 className='text-lg'>Total Bids Amount</h1>
        <h1 className='text-lg'>${amount}</h1>
      </div>

    </div>
  );
};
export default FavoriteLists
