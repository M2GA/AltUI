export default class AltLog {
    constructor() { }
    log(log) {
        console.log('[ alt-log ] ' + log);
    }
    debug(debug) {
        console.warn('[ alt-warn ] ' + debug);
    }
    error(error) {
        console.error('[ alt-error ] ' + error);
    }
}
