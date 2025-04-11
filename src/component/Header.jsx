import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className=" bg-base-100 flex justify-between items-center text-xl font-semibold px-6 py-3 ">
        {/* name */}
        <div >
          <a className="btn btn-ghost text-3xl ">
            <span className="text-blue-600 font-bold">Auction</span>
            <span className="text-yellow-500">Gallery</span>
          </a>
        </div>
        {/* ul list */}
        <div>
          <ul className="flex gap-6">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Auctions</li>
            <li className="font-semibold">Categories</li>
            <li className="font-semibold">How to Works</li>
          </ul>
        </div>
        {/* icon */}
        <div className="flex gap-5 items-center">

          <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"> 9</span>
      </div>
    </button>
          <div className="pr-2">
            <img
              className="w-12 rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
