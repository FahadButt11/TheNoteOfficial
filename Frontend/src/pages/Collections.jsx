import React from 'react'
import CollectionCard from '../components/CollectionCard';
import Assets from '../assets/Assets';

const Collections = () => {
    return (
      <div className="py-12">
        <nav className="text-sm ml-8 mb-4 text-gray-600">
          <a href="/" className="hover:text-black">
            Home
          </a>{" "}
          &gt; Collections
        </nav>
        <h2 className="text-2xl ml-8 mb-8">COLLECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* First Collection Card */}
          <CollectionCard
            image={Assets.mainimage}
            title="PERFUMES FOR MEN"
            description="Discover The Allure Of Masculinity With THE NOTE's Perfumes For Men. Welcome To THE NOTE, Your Premier Destination For Perfumes For Men."
            productsCount={7}
            buttonText="Shop Now"
            link="/men-collection"
          />
  
          {/* Second Collection Card */}
          <CollectionCard
            image={Assets.mainimagewomen}
            title="PERFUMES FOR WOMEN"
            description="Embrace Your Essence With THE NOTE's Perfumes For Women. Welcome To THE NOTE, Where We Celebrate The Art Of Fragrance With Our Exquisite..."
            productsCount={5}
            buttonText="Shop Now"
            link="/women-collection"
          />
  
          
        </div>
      </div>
    );
  };

export default Collections;
