import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies["jwt-netflix"];
        //cookie-parser gets the token generated in generateTokenAndSetCookie

		if (!token) {
			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
		}
        // console.log("token",token)

		const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}
        // console.log("decoded",decoded)

		const user = await User.findById(decoded.userId).select("-password");
        // .select("-password") : meaning deselect the password

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}
        // console.log("user",user)-> Fetched from DB

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// app.use("/api/v1/movie",protectRoute, movieRoutes);
// app.use("/api/v1/tv",protectRoute, tvRoutes);
// next refers to movieRoutes or tvRoutes

