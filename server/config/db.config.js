const mongoose = require("mongoose");
const uri =
	process.env.MONGODB_URI ||
	"mongodb://localhost:27017/extra";

mongoose
	.connect(uri)
	.then(() => console.log("Database connected successfully!"))
	.catch((err) => console.error("Error connecting to MongoDB:", err));
