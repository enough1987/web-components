import { STORE, STOREPROPS } from '../store/Store.js'

class DateInput extends HTMLElement {
    constructor(...args) {
        super(...args);
        
        const shadowRoot = this.attachShadow({mode: 'open'});

        let divElement = document.createElement('div');
        divElement.style.position = 'relative';

        let inputElement = document.createElement('input');
        inputElement.type = 'date';
        inputElement.style.width = '300px';
        inputElement.setAttribute('pattern', '\d{4}-\d{2}-\d{2}');

        let labelElement = document.createElement('label');
        labelElement.style.position = 'absolute';
        labelElement.style.top = '1px';
        labelElement.style.left = '4px';
        labelElement.style.width = '285px';
        labelElement.style.background = 'white';
        labelElement.style.display = 'inline-block';
        labelElement.innerText = 'yyyy-mm-dd';
        labelElement.addEventListener('click', function () {
            inputElement.showPicker();
        });

        divElement.appendChild(labelElement);
        divElement.appendChild(inputElement);

        const handleInputChage = function () {
            labelElement.innerText = this.value;
            STORE.set(STOREPROPS.DATE, this.value);
        };
    
        inputElement.addEventListener('input', handleInputChage);
        
        shadowRoot.appendChild(divElement);
    }
}

export default DateInput;