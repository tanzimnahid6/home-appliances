import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-[calc(100vh-50px)] items-center bg-cyan-50">
        <h1 className="text-4xl md:text-6xl text-center  mt-28  animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black">
          Welcome To HeroGadget
        </h1>
        <p className="text-center md:text-xl my-8">
          Best E-commerce platform for buying high quality Smart Home <br />
          Appliances at extremely affordable Price.
        </p>
        <div className=" divide-x  flex text-xl font-semibold ">
          <button className="border  px-7 py-4 bg-cyan-200 rounded-full  ">
            <NavLink to="shop">Shop Now !</NavLink>
          </button>
          <div className="border px-7 py-4 hover:bg-cyan-200  ml-2 transition duration-400 ease-in-out rounded-full">
            <NavLink to="/about">Learn More</NavLink>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center -mt-24  md:-mt-32 mb-5">
          <img
            className="w-4/5 rounded-md"
            src="../../public/banner.jpg"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
