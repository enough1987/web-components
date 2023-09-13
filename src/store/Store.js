

const data = {}
const subscribers = {};

class Store {
    constructor() {
        if (!Store._instance) {
            Store._instance = this;
        }
        return Store._instance;
    }

    subscribe(prop, fn) {
        subscribers[prop] = subscribers[prop] ? [...subscribers[prop], fn] : [fn];
        return fn;
    }
    unsubscribe(prop, fn) {
        subscribers[prop] = subscribers[prop] ? subscribers[prop].filter(_fn => _fn !== fn) : []
    }

    set(prop, val) {
        data[prop] = val;
        subscribers[prop]?.filter(fn => fn(val));
    }
}

export default Store;