import React from 'react'

const FavoriteList = ({list, btnRemove}) => {
  const {id, image, title, currentBidPrice, bidsCount} = list

  return (
    <div className='flex justify-between gap-2 border-b-2 border-b-gray-300 py-2 mt-2'>

      <div className='flex gap-3'>
      <img className='w-16 h-16' src={image} alt="" />

      <div className='text-[16px] '>
        <h1>{title}</h1>

        <div className='flex gap-3'>
          <p> ${currentBidPrice}</p>
          <p>Bids : {bidsCount}</p>
        </div>

      </div>

      </div>

      <div className='text-end'>
        <button 
          onClick={() => btnRemove(id, currentBidPrice)} 
        >
          ✖
        </button>
      </div>
    </div>
  )
}
export default FavoriteList