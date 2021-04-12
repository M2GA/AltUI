export default class AltEvent {
    constructor() {
        this.handlers = [];
    }
    on(handler) {
        this.handlers.push(handler);
    }
    off(handler) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }
    emit(...args) {
        this.handlers.slice(0).forEach(h => h(...args));
    }
    expose() {
        return this;
    }
    count() {
        return this.handlers.length;
    }
}
export class AltEmitter {
    constructor() { this._events = {}; }
    on(event, listener) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event].push(listener);
    }
    removeListener(event, listenerToRemove) {
        if (!this._events[event]) {
            throw new Error(`Can't remove a listener. Event "${event}" doesn't exits.`);
        }
        const filterListeners = (listener) => listener !== listenerToRemove;
        this._events[event] = this._events[event].filter(filterListeners);
    }
    emit(event, data) {
        if (!this._events[event]) {
            throw new Error(`Can't emit an event. Event "${event}" doesn't exits.`);
        }
        const fireCallbacks = (callback) => {
            callback(data);
        };
        this._events[event].forEach(fireCallbacks);
    }
}
