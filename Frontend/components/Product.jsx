import React from 'react';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'WHISPER', src: 'male_1', soldOut: false },
    { id: 2, name: 'DUSK', src: 'male_2', soldOut: false },
    { id: 3, name: 'WOODS', src: 'male_3', soldOut: false },
    { id: 4, name: 'INTENSO', src: 'male_4', soldOut: false },
  ];

  return (
    <div className="px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center relative">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-md"
              />
              {product.soldOut && (
                <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded">
                  Sold Out
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            {!product.soldOut ? (
              <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Add to Cart
              </button>
            ) : (
              <button
                className="mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
