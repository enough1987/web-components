import fetchSearch from '../api/search.js';
import debounce from '../helpers/debounce.js'
import { STORE, STOREPROPS } from '../store/Store.js'

class SearchInput extends HTMLElement {
    constructor(...args) {
        super(...args);
        
        const shadowRoot = this.attachShadow({mode: 'open'});
        let autocomplite = null;

        let inputElement = document.createElement('input');
        inputElement.style.width = '300px';
        inputElement.placeholder = 'search';

        const removeAutocomplite = function () {
            if(autocomplite) {
                shadowRoot.removeChild(autocomplite);
                autocomplite = null;
            }
        }

        const handleInputChage = debounce(async function () {
            const res = await fetchSearch(this.value?.trim() || '');

            removeAutocomplite();

            if(res[0]?.items) {
                autocomplite = document.createElement('ui');
                res[0].items.forEach(element => {
                    let liElement = document.createElement('li');
                    liElement.textContent += element.name;
                    liElement.style.cursor = 'pointer';

                    liElement.addEventListener('click', function (e) {
                        inputElement.value = e.target.textContent;
                        STORE.set(STOREPROPS.SEARCH, e.target.textContent);
                        removeAutocomplite();
                    });

                    autocomplite.appendChild(liElement)
                });

                shadowRoot.appendChild(autocomplite);
            }
        }, 200);
    
        inputElement.addEventListener('input', handleInputChage);
        
        shadowRoot.appendChild(inputElement);
    }
}

export default SearchInput;