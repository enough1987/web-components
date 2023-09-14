import { STORE, STOREPROPS } from '../store/Store.js';
import formatDate from '../helpers/formatDate.js';

class Glue extends HTMLElement {
    constructor(...args) {
        super(...args);
        
        const shadowRoot = this.attachShadow({mode: 'open'});

        const divElement = document.createElement('div');
        const searchDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        divElement.appendChild(searchDiv);
        divElement.appendChild(dateDiv);

        STORE.subscribe(STOREPROPS.SEARCH, function (val) {
            searchDiv.innerText = "Search : " + val;
        });
        STORE.subscribe(STOREPROPS.DATE, function (val) {
            dateDiv.innerText = "Date : " + formatDate(val);
        })

        
        shadowRoot.appendChild(divElement);
    }
}

export default Glue;