import React, { useEffect, useState } from 'react'
import BidItem from './BidItem'



const BidItems = ({handleLove,addAmount,favItem}) => {
  const [bidItem, setBidItem] = useState([])

  useEffect(()=>{
    fetch('/fakeData.json')
    .then(res => res.json())
    .then(data => setBidItem(data))
  },[])

  return (
    <div className='w-[70%] my-16'>
        <div>
        <h1 className='text-3xl text-blue-800 font-semibold mb-2'>Active Auctions</h1>
        <p className='text-xl'>Discover and bid on extraordinary</p>
        </div>



     {/* table er  jonno div */}
        <div className=" bg-white mt-10 rounded-xl p-4">
        <table className=" text-left border-collapse w-full">
        <thead>
          <tr className="text-gray-500 border-b text-xl">
            <th className="px-6 py-3 text-black">Items</th>
            <th className="px-6 py-3 text-black">Current Bid</th>
            <th className="px-6 py-3 text-black">Time Left</th>
            <th className="px-6 py-3 text-black ">Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {bidItem.map((item) => <BidItem favItem={favItem} addAmount={addAmount} handleLove={handleLove} key={item.id} item={item}></BidItem> )}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default BidItems
