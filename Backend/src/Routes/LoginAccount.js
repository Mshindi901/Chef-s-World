/* eslint-disable no-undef */
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, password} = req.body
    try {
        const account = await User.findOne({email});
        if(!account){
            return res.status(400).json({
                success: false,
                message: "No Account found"
            })
        }
    
        const isMatch = await bcrypt.compare(password, account.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({id: account._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
        if(!token){
            return res.status(500).json({
                success: false,
                message: "Token generation failed"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            User: account,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})
export default router;