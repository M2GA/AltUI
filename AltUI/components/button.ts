// Modules
import AltLog  from "../module/AltLog";
import Wait  from "../module/Wait";
import AltEvent from "../module/AltEvent";

const {log, debug, error} = new AltLog

export default class Button {
  constructor() { }

  init() {
    log("Je suis le button")
  }
}