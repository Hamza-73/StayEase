const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
module.exports.registerUser = async (req, res) => {
    const { name, email, password, phoneNumber, cnic } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please add all fields' });
        }
        const existingCnic = await User.findOne({ cnic });
        if (existingCnic) {
            return res.status(400).json({ success: false, message: 'Cnic Already Exists' });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ success: false, message: 'Email Already Exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await new User({ name, email, phoneNumber, cnic, password: hashedPassword });
        if (user) {
            await user.save();
            return res.status(201).json({ success: true, message: 'Register Successful', user });
        } else {
            return res.status(201).json({ success: false, message: 'Invalid Data' });
        }
    } catch (error) {
        console.log('error in registering user', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};


// Login User
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("start")
        const validUser = await User.findOne({ email });
        if (!validUser) return res.status(404).json({ success: false, message: "User Not Found" });
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return res.status(401).json({ success: false, message: "Wrong credentials" })
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).json({ success: true, rest, message:"Login Successfull", token });
    } catch (error) {
        next(error);
        console.log("error in signin in", error)
    }


};

// Get User Profile
module.exports.getProfile = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json({ success: true, message: "User data fetched successfuly", user })
        } else {
            res.status(200).json({ success: false, message: "Error in getting user data" })
        }
    } catch (error) {
        console.log("error in gettig user", error);
        return res.status(500).json({ success: false, message: "Interal Server Error", error: error.message })
    }
};