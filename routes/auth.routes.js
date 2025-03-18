
import express from 'express';
import { User } from '../models/index.js';
import { generateToken } from '../utils/helpers.js';



const router = express.Router();

//registeration
router.post('/register', async (req, res) => {
    
    const { username, email } = req.body;  // ✅ Extracting username instead of name

    if (!username || !email) {
        return res.status(400).json({ message: "Missing username or email" });
    }

    try {
        // ✅ Checking if user already exists before creating
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // ✅ Creating the user
        const newUser = await User.create({ name: username, email: email });

        // ✅ Generating token
        const token = generateToken(newUser.id);
        res.status(201).json({
            token,
            user: {
                id: newUser.id,
                name: newUser.name
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;