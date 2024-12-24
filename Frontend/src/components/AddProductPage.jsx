import {React , useState } from 'react';
import Sidebar from '../components/Sidebar';

const AddProductPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState(true);
  const [selectMl, setSelectMl] = useState([]);
  const [description, setDescription] = useState('');
  const [olfactoryNotes, setOlfactoryNotes] = useState({
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
  });
  const [productDetails, setProductDetails] = useState({
    quantity: '',
    seasons: [],
    occasions: [],
    longLasting: '',
  });
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [createdAt] = useState(new Date().toISOString());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity,
      stock,
      selectMl,
      description,
      olfactoryNotes,
      productDetails,
      images,
      category,
      createdAt,
    };
    console.log('Product Details:', newProduct);
    // Reset the form
    setTitle('');
    setPrice('');
    setQuantity('');
    setStock(true);
    setSelectMl([]);
    setDescription('');
    setOlfactoryNotes({
      topNotes: [],
      middleNotes: [],
      baseNotes: [],
    });
    setProductDetails({
      quantity: '',
      seasons: [],
      occasions: [],
      longLasting: '',
    });
    setImages([]);
    setCategory('');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Product Title</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium">In Stock</label>
            <select
              className="w-full border rounded p-2"
              value={stock}
              onChange={(e) => setStock(e.target.value === 'true')}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          {/* Select ML */}
          <div>
            <label className="block text-sm font-medium">Select ML</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={selectMl}
              onChange={(e) => setSelectMl([e.target.value])}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Olfactory Notes */}
          <div>
            <label className="block text-sm font-medium">Top Notes</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={olfactoryNotes.topNotes.join(', ')}
              onChange={(e) => setOlfactoryNotes({ ...olfactoryNotes, topNotes: e.target.value.split(', ') })}
            />
            <label className="block text-sm font-medium">Middle Notes</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={olfactoryNotes.middleNotes.join(', ')}
              onChange={(e) => setOlfactoryNotes({ ...olfactoryNotes, middleNotes: e.target.value.split(', ') })}
            />
            <label className="block text-sm font-medium">Base Notes</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={olfactoryNotes.baseNotes.join(', ')}
              onChange={(e) => setOlfactoryNotes({ ...olfactoryNotes, baseNotes: e.target.value.split(', ') })}
            />
          </div>

          {/* Product Details */}
          <div>
            <label className="block text-sm font-medium">Quantity Details</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={productDetails.quantity}
              onChange={(e) => setProductDetails({ ...productDetails, quantity: e.target.value })}
              required
            />
            <label className="block text-sm font-medium">Seasons</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={productDetails.seasons.join(', ')}
              onChange={(e) => setProductDetails({ ...productDetails, seasons: e.target.value.split(', ') })}
            />
            <label className="block text-sm font-medium">Occasions</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={productDetails.occasions.join(', ')}
              onChange={(e) => setProductDetails({ ...productDetails, occasions: e.target.value.split(', ') })}
            />
            <label className="block text-sm font-medium">Long Lasting</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={productDetails.longLasting}
              onChange={(e) => setProductDetails({ ...productDetails, longLasting: e.target.value })}
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium">Images (URLs)</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={images.join(', ')}
              onChange={(e) => setImages(e.target.value.split(', '))}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
