export class AltEventsEmitter {

  private _events: {[index: string]:any} = {}; // contains all events

  constructor() {}

  /**
   * this method register an event
   * @param event
   * @param listener
   * @public
   */
  public on(event: string, listener: (arg?:any) => any): void {
      if (!this._events[event]) {
          this._events[event] = [];
      }
      this._events[event].push(listener);
  }

  /**
   * this method remove an event registered if this event doesn't exist that throw an error
   * @param event
   * @param listenerToRemove
   * @public
   */
  public removeListener(event: string, listenerToRemove: (arg?:any) => any): void {
      if (!this._events[event]) {
          throw new Error(`Can't remove a listener. Event "${event}" doesn't exits.`);
      }

      const filterListeners = (listener: (arg?:any) => any) => listener !== listenerToRemove;

      this._events[event] = this._events[event].filter(filterListeners);
  }

  /**
   * This method is used to emit an event if this event doesn't exist that throw an error
   * @param event
   * @param data
   * @protected
   */
  protected emit(event: string, data: any) {
      if (!this._events[event]) {
          throw new Error(`Can't emit an event. Event "${event}" doesn't exits.`);
      }

      const fireCallbacks = (callback: (arg?:any) => any) => {
          callback(data);
      };

      this._events[event].forEach(fireCallbacks);
  }
}