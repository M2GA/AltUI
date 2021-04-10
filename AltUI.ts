import { AltLog } from "./AltLog.js";
import { AltEventsEmitter } from "./AltEventsEmiter.js";
const {log, debug, error} = new AltLog

export  namespace AltUI {
  interface menu {
    title?: string,
    items: Array<Item>,
    pos?: Array<number>,
    submenus?: Array<subMenu>,
    success?: (success: boolean) => void,
    error?: (error: string) => void
  }

  export class Menu {

    _title: string
    _items: Array<Item>
    _submenu?: Array<subMenu>
    constructor (options: menu){
      options.title ? this._title = options.title : (debug("Missing title Menu"), this._title = "ALtUI")
      options.items ? this._items = options.items : error("Missing Item in Menu")
      options.items ? this._submenu = options.submenus : null
      this.init()
    }

    private init() {
      log(this._title + " menu is init for")
      log("Number of Item(s) " + this._items.length + " In " + this._title + " Menu")
      return this._title
    }

    open() {
      return log(this._title + " menu is open")
    }

    close() {
      log(this._title + " menu is close")
    }

    item(title:string) : void {
      let item
      for (const i in this._items) this._items[i].data().title == title ? item = this._items[i] : null
      return item
    }

  }

  interface submenu {
    title?: string
    items: Array<Item>,
    success?: (success: boolean) => void,
    error?: (error: string) => void
  }

  export class subMenu {

    _title: string
    _items: Array<Item>
    constructor(options: submenu) {
      this._title = options.title || "AltUI"
      this._items = options.items
    }
  }

  enum itemType {
    data = "data",
    button = "button",
    checkbox = "checkbox"
  }

  interface item {
    title: string,
    type?: string,
    description?: string,
    navigation?: string,
  }

  export class Item extends AltEventsEmitter {

    _title: string
    _type: string
    _description: string
    _navigation: string

    constructor(options: item) {
      super()
      options.title ? this._title = options.title : (error("Title is missed for Item"), this._title = "AltUI")
      options.type == "button" || options.type == "checkbox" || options.type == "input" ? this._type = options.type : (error("Type is missed or Invalid for Item"), this._type = null)
      options.description ? this._type = options.description : (debug("Description is missed for Item"), this._description = null)
      options.navigation ? this._navigation = options.navigation : (debug("Navigation is missed for Item"), this._navigation = null)
      this.init()
    }

    _item
    init() {
      this.on(itemType.button || itemType.checkbox, () => {})
      this.on(itemType.data, () => {})
    }

    data() {
      let data = {title: this._title, type: this._type, desc: this._description, nav: this._navigation}
      this.emit(itemType.data, data)
      return data
    }
      // log(this._title + ", " + this._type + ", " + this._description + ", " + this._navigation)
      // switch (type) {
      //   case "click":
      //     this._type == "button" ? this.click() : error("The type does not match your item")
      //     break
      //   case "checked":
      //     this._type == "checkbox" ? this.checked() : error(" The type does not match your item")
      //     break
      //   case "change":
      //     this._type == "input" ? this.change() : error("The type does not match your item")
      //     break
      //   default:
      //     break
      // }

    // click() {
    //   document.getElementById(this._title).addEventListener("click", (e) => {
    //     log('Clikc2')
    //   })
    //   document.getElementById(this._title).addEventListener("keypress", (e) => {
    //     e.key == "Enter" ? log("Enter pressed") : error("Error not pressed")
    //   })
    // }

    // checked() {
    // }

    // change() {
    // }
  }

  interface notify {

  }

  export class Notify {
    constructor () {

    }
  }

}
log('AltLUI Initialized (Menu [submenu], Item, Notify)')