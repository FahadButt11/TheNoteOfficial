import React from 'react'
import Assets from '../assets/Assets';

const CollectionHero = ({image}) => {
  return (
    <div>
      <div className="ml-4 p-8 w-full ">
      <nav className="mb-4 text-gray-600">
          <a  href="/" className="hover:text-black text-[16px]">
            Home
          </a>{" "}
          &gt; <span className='text-[16px]'>Perfumes For men</span>
        </nav>

      </div>

        <div className="w-100 ml-12 mr-12 my-5 overflow-hidden" >
        <img src={image} className='cursor-pointer w-[100%] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105'
        />

        </div>

      
    </div>
  )
}

export default CollectionHero
