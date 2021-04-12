// Modules
import AltLog  from "../module/AltLog";
import Wait  from "../module/Wait";
import AltEvent from "../module/AltEvent";

// Components
import Button from "./button.js"

const {log, debug, error} = new AltLog

export interface item {
  title: string
  type?: string
  description?: string
  navigation?: string
}

enum e_Item {
  data = "data",
  click = "click",
  isCheck = "isCheck",
  change = "change"
}

export default class Item {

  private _title: string
  private _type: string
  private _description: string
  private _navigation: string

  constructor(options: item) {
    options.title ? this._title = options.title : (error("Title is missed for Item"), this._title = "AltUI")
    options.type == "button" || options.type == "checkbox" || options.type == "input" ? this._type = options.type : (error("Type is missed or Invalid for Item " + '"' + this._title + '"' + " AltUI:item"), this._type = null)
    options.description ? this._type = options.description : (debug("Description is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._description = null)
    options.navigation ? this._navigation = options.navigation : (debug("Navigation is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._navigation = null)
    this.init()
  }

  init() {
    this._type == "button" ? new Button() : null
    log("Item " + '"' + this._title + '"' + " is init")
  }

  async emited() {
    await Wait(1)
  }

  data() {
    return {title: this._title, type: this._type, desc: this._description, nav: this._navigation}
  }
}