import { User } from "../models/user";


/**
 * 
 * @param {User} user 
 */
export const userModeToLocalHost = (user) => {
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_Name: lastName,
    }
}