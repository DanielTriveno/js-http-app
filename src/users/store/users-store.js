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
  
const onUserChanged = () => {
    throw new Error('Not implemented');

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