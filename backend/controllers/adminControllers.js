import { Admin } from "../models/admiModel.js";
import { hashSync, compareSync } from 'bcrypt';
import { generateToken } from "../utils/token.js";

 export const adminSignup = async (req, res, next) => {
    try {
        const { name, email, password, phone, profilePic } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isAdminExist = await Admin.findOne({ email });

        if (isAdminExist) {
            return res.status(400).json({ message: "admin already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = hashSync(password, saltRounds);

        const newUser = new Admin({ name, email, password: hashedPassword, phone, profilePic });
        await newUser.save();

        const token = generateToken(newUser._id,"admin");

        res.cookie("token", token);
        res.json({ success: true, message: "admin created successfully" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const adminExist = await Admin.findOne({ email });
        if (!adminExist) {
            return res.status(404).json({ success: false, message: "admin does not exist" });
        }

        const passwordMatch = compareSync(password, adminExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "admin not autherized" });
        }

        const token = generateToken(adminExist._id,"admin");

        res.cookie("token", token);
        res.json({ success: true, message: "admin login successfull" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};


export const adminLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.json({ message: "admin logout success", success: true });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message :error.message || "internal server error"})
    }
};
export const adminProfile = async (req, res, next) => {
    try {
        const admin  = req.user;
        console.log(admin, "=========admin");

        const adminData = await Admin.findOne({ _id: admin.id });

        res.json({ success: true, message: "admin data fetched", data: adminData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkadmin = async (req, res, next) => {
    try {
        const { admin } = req;
        if (!admin) {
            res.status(401).json({ success: false, message: "admin not autherized" });
        }

        res.json({ success: true, message: "admin autherized" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

