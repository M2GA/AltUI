// Modules
import AltLog from "../module/AltLog";
const { log, debug, error } = new AltLog;
export default class Button {
    constructor() { }
    init() {
        log("Je suis le button");
    }
}
