import Store from '../store/Store.js'

const STORE = new Store();

class Glue extends HTMLElement {
    constructor(...args) {
        super(...args);
        
        const shadowRoot = this.attachShadow({mode: 'open'});

        let divElement = document.createElement('div');

        STORE.subscribe('search', function (val) {
            divElement.innerText = "Search : " + val;
        })

        
        shadowRoot.appendChild(divElement);
    }
}

export default Glue;