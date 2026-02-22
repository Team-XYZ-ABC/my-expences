import userProfile from "../models/user.model.js";

export const getAllUsersData = async() => {
    const users = await userProfile.find().select("-password");
    return users;
}