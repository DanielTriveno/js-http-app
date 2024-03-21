import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal, form;

//TODO CARGAR USUARIO POR ID
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}


export const hideModal = () => {
    modal?.classList.add('hide-modal');
    //TODO reset del formulario
    form?.reset();
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>} callback
 */
export const renderModal = (element, callback) => {
    if ( modal ) return;
     //si es la primera vez, construye todo
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.classList = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', (event)=>{
        //console.log(event.target);
        if (event.target.className === 'modal-container') // si es !== return
        {
            hideModal();
        }
    });

    form.addEventListener('submit', async (event) =>{
        //console.log(event);

        event.preventDefault();
        //console.log('Formulario Enviado');*/
        
        const formData = new FormData(form);
        const userLike = {};

        for (const [key, value] of formData) {
            //console.log(iterator);
            if (key=== 'balance'){
                userLike[key] = +value; //convirtiendo a un numero
                continue;
            }

            if( key === 'isActive'){
                userLike [key] = (value === 'on') ? true :false;
                continue;
            }

            userLike[key] = value;

        }
        //console.log(userLike);
        //TODO Guardar usuario

        await callback(userLike);
        hideModal();

    });

    element.append (modal);

} 