import jsdom from 'jsdom';

global.window = new jsdom.JSDOM().window;
global.document = window.document;
global.customElements = window.customElements;
global.HTMLElement = window.HTMLElement;