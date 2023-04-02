import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"],
            default: "admin"
        },
    },
    {timestamps: true}
);

export const User = mongoose.model("User", UserSchema);