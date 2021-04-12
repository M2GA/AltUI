interface Event {
	on(handler: { (...args: any[]): void }): void;
	off(handler: { (...args: any[]): void }): void;
}

export default class AltEvent implements Event {
  constructor() {}

  private handlers: { (...args: any[]): void }[] = [];

  public on(handler: { (...args: any[]): void }): void {
      this.handlers.push(handler);
  }

  public off(handler: { (...args: any[]): void }): void {
      this.handlers = this.handlers.filter(h => h !== handler);
  }

  public emit(...args: any[]) {
      this.handlers.slice(0).forEach(h => h(...args));
  }

  public expose(): Event {
      return this;
  }

  public count(): number {
      return this.handlers.length;
  }
}

export class AltEmitter {

    private _events

    constructor() { this._events = {} }
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