import React from 'react'
import MenCollection from '../components/MenCollection';
import PerfumesForMen from '../components/PerfumesForMen';
import Assets from '../assets/Assets'
import CollectionHero from '../components/CollectionHero';

const Men = () => {
  return (
    <div>

        <CollectionHero image={Assets.mainimage} text="Perfume For Men" />
        <PerfumesForMen/>
        <MenCollection/>
      
    </div>
  )
}

export default Men
