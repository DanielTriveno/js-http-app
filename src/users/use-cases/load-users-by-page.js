
import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>} 
 */


export const loadUsersByPage = async(page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch (url);
    const data = await res.json();

    /*if (Array.isArray(data.data)) {
        const users = data.data.map(userLike => localhostUserToModel(userLike));
        console.log(users);
    } else {
        console.error('Los datos recibidos no son un array:', data.data);
    }*/
      
    
    //const users = data.data.map(userLike=>localhostUserToModel(userLike));
    const users = data.data.map(localhostUserToModel);


    //console.log(users);
    return users;
}