//TESTED SUCCESSFULLY!

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users.model');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const user = req.body;
    try {
        const pass=user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        const users = new User(user);
        users.password=hashedPassword;
        
        await users.save();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json("error registering user: "+ error.message );
        
    }
        
    });

// Login User
router.post('/login', async (req, res) => {
    const userLogin = req.body;
    let email=userLogin.email;
    let pass=userLogin.password;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // req.session.user = user;
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
});

// Logout User
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
