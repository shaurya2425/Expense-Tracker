const User = require('../models/User')
const jwt = require('jsonwebtoken');


// Generate a JWT Token
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'})

}

// Register User
exports.registerUser = async (req,res) => {
    const {fullName,email,password,profileImageUrl} = req.body || {};

    // Validation: Check for missing fields
    if(!fullName || !email || !password || !profileImageUrl){
        return res.status(400).json({message:"All fields are required"})
    }

    try {
        // check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already in use"});
        }

        // Create a New User
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        })

        res.status(201).json({
            id:user._id,
            user,
            token:generateToken(user._id),
        })

    } catch (error) {
        res.status(500).json({message:"Error registering user",error:error.message})
    }

};

// Login User
exports.loginUser = async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }

    try {
        
        const user=await User.findOne({email});

        if(!user || !(await user.comparePassword(password)))
        {
              return res.status(400).json({message:"Invalid Credentials"});
        }

        res.status(200).json(
            {
                id:user._id,
                user,
                token:generateToken(user._id)
            }
        )

    } catch (error) {
        return res.status(400).json({message:"Login Failed"});

    }
};

// GetUserInfo
exports.getUserInfo = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if(!user)
        {
              return res.status(400).json({message:"User not found"});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({message:"Error Getting User Info"});

    }
};