const User = require("../models/user-model");


const user = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        next(error);
    }
}

const register = async (req, res) => {
    try {
        const data = req.body;
        const userExist = await User.findOne( {
            $or: [
                {email: data.email},
                {phone: data.phone}
            ]
        } );

        if (userExist) return res.status(400).json({ message: 'User already exists' });

        const userCreated = await User.create(data);

        res
        .status(201).json({
            message: "Registration Successfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
        
    } catch (error) {
        res.status(400).json({msg:"page not found"});
    }

};

const login = async (req, res) => {
    try {
        const data = req.body;

        const userExist = await User.findOne({ email: data.email });
        if (!userExist) return res.status(400).json({ message: 'Invalid Credentials.' });
        const validPassword  = await userExist.comparePassword(data.password);
        if (validPassword ) {
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        } else {
            res.status(401).json({ message: 'Invalid Email or Password.' });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({msg:"Internal server error"})
    }
}

module.exports = { user, register, login };




