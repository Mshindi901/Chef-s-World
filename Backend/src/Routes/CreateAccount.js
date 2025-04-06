import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';
const router = express.Router();


router.post('/create-account', async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({success: false, message: 'Please fill all fields'});
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        return res.status(200).json({
            success: true,
            message: 'User created successfully',
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Server error',
        })
    }
})
export default router;