// TESTED SUCCESSFULLY

const express = require('express');
const router = express.Router();
const Collection = require('../../models/collections.model'); // Adjust path as per your project structure

// Create a new collection
router.post('/add', async (req, res) => {
  try {
    const collections = req.body;

    const coll= new Collection(collections);

    await coll.save();
    res.status(201).json(coll);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all collections
router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
