import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';
 
/**
 * 
 * @param {HTMLDivElement} elementv
 * @param {() => void }callback 
 */
export const renderAddButton= (element, callback) => {
    const fabButton = document.createElement('button');
    fabButton.innerText ='+';

    fabButton.classList.add('fab-button');
    
    element.append(fabButton);

    //TODO
    fabButton.addEventListener('click', ()=>{
        //throw Error ('Not implemented')
        /*if(!callback)return;

        callback();*/

        showModal();
    } )

}