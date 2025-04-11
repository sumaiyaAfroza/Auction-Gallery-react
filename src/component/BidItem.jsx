import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";


const BidItem = ({item,handleLove,addAmount,favItem,lastBorder}) => {
    // console.log(item)
    const { id,title, currentBidPrice, timeLeft, image } = item;
    const isFav = favItem.some((favId)=> favId.id === id ) 


  return (
<tr className={` hover:bg-gray-100 transition text-lg ${lastBorder || "border-b border-gray-300"}`}>
      <td className="px-6 py-4 flex items-center gap-4">
        <img src={image} alt={title} className="w-20 h-20 rounded object-cover" />
        <span className="text-gray-600 font-medium">{title}</span>
      </td>
      <td className="px-6 py-4 text-center  font-medium text-gray-600">${currentBidPrice}</td>
      <td className="px-6 py-4 font-medium text-gray-600">{timeLeft}</td>
      <td className="px-6 py-4 text-center">
        <button disabled={isFav} className={`${isFav? 'cursor-not-allowed text-3xl':'cursor-pointer text-2xl'}`} onClick={() => {
  if (!isFav) {
    handleLove(item);
    addAmount(currentBidPrice);
  }
}}
>
        {isFav? <GoHeartFill className='text-red-600' />:<FaRegHeart />}
        </button>
      </td>
    </tr> 
    
  );
};
  

export default BidItem
