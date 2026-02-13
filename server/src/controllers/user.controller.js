import userProfile from '../models/user.model.js';
import { getAllUsersData } from '../services/user.service.js';

export const fetchAllUsers = async() =>{
    try {
        const users = await getAllUsersData();

        res.status(200).json({
            message: "Success",
            users: users.length,
            data: users
        })
    } catch (error) {
        
    }
}