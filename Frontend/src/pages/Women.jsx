import React from 'react'
import WomenCollection from '../components/WomenCollection';
import PerfumesForWomen from '../components/PerfumesForWomen';
import Assets from '../assets/Assets'
import CollectionHero from '../components/CollectionHero';

const Women = () => {
  return (
    <div>
        
        <CollectionHero image={Assets.mainimagewomen} text="Perfume For Women" />
        <PerfumesForWomen/>
        <WomenCollection/>
      
    </div>
  )
}

export default Women
