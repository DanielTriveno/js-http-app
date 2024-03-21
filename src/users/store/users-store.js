import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],

}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length ===0) return;//No haga nada si 

    state.currentPage += 1;
    state.users = users;

}

const loadPrevioustPage = async () => {

    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage -1); 

    state.users = users;
    state.currentPage -= 1;
  

}
/**
 * 
 * @param {User} updatedUser
 */  
const onUserChanged = (updatedUser) => {

    let wasFound = false;
    
    state.users = state.users.map(user => {
        if ( user.id === updatedUser){
            wasFound = true;
            return updatedUser;
        }
        return user;
    })

    if (state.users.length < 10 && ! wasFound) {
        state.users.push (updatedUser);
    }
}

const reloadPage = async () =>{
    throw new Error('Not implemented');

} 

export default {
    
    loadNextPage,
    loadPrevioustPage,
    onUserChanged,
    reloadPage,

    //getUsers: () => state.users,
    /**
     * 
     * @returns {User[]} 
     */
    getUsers: () => [...state.users],// operador Spread obejeto por valor
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage // primitivo por referecnia
    
}