
import { getAllUsersData } from '../services/user.service.js';

export const fetchAllUsers = async(req, res, next) =>{
    try {
        const users = await getAllUsersData();

        res.status(200).json({
            success: true,
            users: users.length,
            data: users
        })
    } catch (error) {
        next(error);
    }
}