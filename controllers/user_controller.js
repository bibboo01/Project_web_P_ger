const User = require("../models/user");

exports.getusers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

exports.getuser = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const user = new User.findById(id);
        res.json(user)
    } catch (err) {
        res.status(404).send(err.message);
    }
}

exports.postuser = async (req, res) => {
    const { user_id, username, password} = req.body;
    const user = new User({ user_id, username, password});
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}