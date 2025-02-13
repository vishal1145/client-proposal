import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('login');
    const { email, password } = req.body;
    console.log('email', email);
    console.log('password', password);

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        console.log('user', user);
        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);      
        console.log('isMatch', isMatch);    
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create and return JWT token
        const payload = {
            user: {
                id: user.id
            }
        };
        console.log('payload', payload);
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
        console.log('token', token);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;