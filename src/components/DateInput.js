import { STORE, STOREPROPS } from '../store/Store.js'

class DateInput extends HTMLElement {
    constructor(...args) {
        super(...args);
        
        const shadowRoot = this.attachShadow({mode: 'open'});

        let inputElement = document.createElement('input');
        inputElement.type = 'date';
        inputElement.style.width = '300px';
        inputElement.setAttribute('value', 'YYYY.MM.DD');


        const handleInputChage = function () {
            console.log('value: ', this.value);
            STORE.set(STOREPROPS.DATE, this.value);
        };
    
        inputElement.addEventListener('input', handleInputChage);
        
        shadowRoot.appendChild(inputElement);
    }
}

export default DateInput;