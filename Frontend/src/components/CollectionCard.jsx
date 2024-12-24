import React from "react";
// import Assets from "../assets/Assets.js"
import {NavLink} from "react-router-dom";

const CollectionCard = ({image, title, description, productsCount, buttonText, link }) => {
  return (
    <div className=" mx-auto ml-4 mb-20">
      {/* Image */}
      <NavLink to= {link}>
      <img src={image} alt={title} className="w-full object-cover hover:opacity-50 pointer"  />
      
      </NavLink>

      {/* Title and Description */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-500">{productsCount} PRODUCTS</p>
        <p className="text-gray-600 mt-6 ">{description}</p>
        
        {/* Button */}
        <NavLink to={link}>
        <button className="mt-8 px-6 py-2 w-[40%] bg-black text-white transition-translate duration-800 hover:-translate-y-1 hover:bg-white hover:text-black border border-black transition">
          {buttonText}
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CollectionCard;
