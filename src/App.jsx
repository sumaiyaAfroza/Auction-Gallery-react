import { Bounce, ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Banner from "./component/Banner";
import BidItems from "./component/BidItems";
import Footer from "./component/Footer";
import Header from "./component/Header";
import FavoriteLists from "./component/FavoriteLists";


function App() {
  const [favItem, setFavItem] = useState([]);
  const [amount, setAmount] = useState(0);

  const btnRemove = (id, price) => {
    const removeItem = favItem.filter((cut) => cut.id !== id);
    setFavItem(removeItem);
    setAmount((prevAmount) => prevAmount - price);
    toast.warn('🦄 item remove from favorites!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  const handleLove = (item) => {
    const newFav = [...favItem, item];
    setFavItem(newFav);
    toast.success('🦄 Item added to favorite list', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  const addAmount = (tk) => {
    const addTk = amount + tk;
    setAmount(addTk);
  };

  return (
    <>
      <div className="sora">


      <Header></Header>
      <Banner></Banner>

      <div className="bg-gray-200">
        <div className="max-w-screen-2xl mx-auto space-x-8 flex items-start">
          <BidItems favItem={favItem} addAmount={addAmount} handleLove={handleLove}></BidItems>

          <FavoriteLists
            btnRemove={btnRemove}
            amount={amount}
            favItem={favItem}
          ></FavoriteLists>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      </div>
    </>
  );
}
export default App;