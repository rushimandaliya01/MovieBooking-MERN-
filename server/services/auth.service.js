const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (email, password) => {
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return null;
	}

	const salt = await bcrypt.genSalt(10);
	const user = new User({
		email,
		password,
	});

	user.password = await bcrypt.hash(password, salt);

	await user.save();
	return user;
};

const login = async (email, password) => {
	let user = await User.findOne({ email });
	if (!user) {
		return null;
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return null;
	}

	const payload = {
		user: {
			_id: user._id,
		},
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
    
    user = {
        _id: user._id,
        email: user.email,
        token: token,
    };
	return user;
};

module.exports = {
	register,
	login,
};
