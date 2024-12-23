//SUCCESSFULLY TESTED

const express = require('express');
const Product = require('../../models/products.model');
const multer = require('multer');
const router = express.Router();
const upload = require("../../middlewares/upload");


// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
});

router.get('/:collection', async(req,res) => {
    try {
        const products= await Product.find({category:req.params.collection});
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
})



router.get('/:productId', async (req, res) => {
    const productId  = req.params.productId;
    try {
        const product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err.message });
    }
});

// Add Product
// router.post('/add', async (req, res) => {
//     const productData = req.body;
//     try {
//         const product = new Product(productData);
//         await product.save();
//         res.status(201).json({ message: 'Product added successfully', product });
//     } catch (err) {
//         res.status(500).json({ message: 'Error adding product', error: err.message });
//     }
// });

router.post("/add", upload.array("images", 5), async (req, res) => {
    try {
      const imageUrls = req.files.map((file) => `/uploads/${file.filename}`); // Save uploaded file paths
  
      const newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        quantity: req.body.quantity,
        stock: req.body.stock === "true", // Convert string to boolean
        selectMl: JSON.parse(req.body.selectMl), // Parse JSON string
        description: req.body.description,
        olfactoryNotes: JSON.parse(req.body.olfactoryNotes), // Parse JSON string
        productDetails: JSON.parse(req.body.productDetails), // Parse JSON string
        images: imageUrls,
        category: req.body.category,
      });
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// Update Product
router.put('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const updateData = req.body; // Updated data is expected in the request body


        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            updateData,
            { new: true } // Return the updated product and run schema validators
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(200).json({
            message: 'Product updated successfully!',
            product: updatedProduct,
        });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({
            message: 'Failed to update the product.',
            error: error.message,
        });
    }
});




router.delete('/delete/:id', async (req,res) =>{

    try {
        const product= await Product.findOneAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "error deleting product",
            error:  error.message
        });
        
    } 
});

module.exports = router;
