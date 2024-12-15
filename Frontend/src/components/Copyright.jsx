import Assets from '../assets/Assets';
import React from 'react';
const Copyright = () => {
  return (
    
      <div className="w-full h-[3rem] flex items-center justify-between pl-3  bg-white text-xs text-[#232323]">
      @2024 The Note. all rights reserved.
      <img className='w-[250px] h-17' src={Assets.mastercard} alt="mastercard image" />

      </div>
    
  )
}

export default Copyright
