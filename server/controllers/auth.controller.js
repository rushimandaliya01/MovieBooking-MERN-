const userService = require("../services/auth.service");

const register = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userService.register(email, password);
        if(!user) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        
		res.status(201).json({
			message: "User registered successfully",
			user,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userService.login(email, password);
		if (!user) {
			return res.status(400).json({
				message: "Invalid credentials",
			});
		} else {
			res.status(200).json({
				message: "User logged in successfully",
				user,
			});
		}
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

module.exports = {
	register,
	login,
};
