// Required Modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const ConnectionDb=require('./Config/connectionDb')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());




// Import Routes
const userRoutes = require('./routes/users.route');
const productRoutes = require('./routes/admin/adminProducts.route');
const collectionRoutes = require('./routes/admin/adminCollections.route')
// const reviewRoutes = require('./routes/reviews.route');
const orderRoutes = require('./routes/orders.route');
const adminOrderRoutes = require('./routes/admin/adminOrders.route');

// Use Routess
app.use('/users', userRoutes);
app.use('/admin/collections', collectionRoutes);
app.use('/admin/products', productRoutes);
// app.use('/products/:productId/reviews', reviewRoutes);
app.use('/placeOrders', orderRoutes);
app.use('/admin', adminOrderRoutes);

ConnectionDb();

// const userRoutes = require('./routes/users.route');
console.log('User Routes:', userRoutes);

// const productRoutes = require('./routes/admin/adminProducts.route');
console.log('Product Routes:', productRoutes);

// const orderRoutes = require('./routes/orders.route');
console.log('Order Routes:', orderRoutes);

// const adminOrderRoutes = require('./routes/admin/adminOrders.route');
// console.log('Admin Order Routes:', adminOrderRoutes);



// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
