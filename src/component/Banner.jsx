import React from "react";
import banner from "/Banner-min.jpg";

const Banner = () => { 
  return (
    <div >
      <div
        className="hero flex h-[730px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className=" hero-content text-start text-neutral-content pl-8">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold">Bid on Unique Items <br /> from Around the World
            </h1>
            <p className="mb-5 text-4xl">
            Discover rare collectibles, luxury goods, and <br /> vintage treasures in our curated auctions
            </p>
            <button className="btn font-semibold text-2xl p-6">Explore Auction</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
