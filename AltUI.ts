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

  interface submenu {
    title?: string
    items?: Array<Item>,
    success?: (success: boolean) => void,
    error?: (error: string) => void
  }

  interface item {
    title: string
    type?: string
    description?: string
    navigation?: string
  }

  enum e_Menu {
    open = "open"
  }

  enum e_Item {
    data = "data",
    click = "click",
    isCheck = "isCheck",
    change = "change"
  }

  export class Menu extends AltEventsEmitter {

    private _title: string
    private _items: Array<Item>
    private _submenu?: Array<subMenu>

    constructor (options: menu){
      super()
      options.title ? this._title = options.title : (debug("Missing title Menu"), this._title = "ALtUI")
      this.init()
    }

    protected init(): void {
      log('"' + this._title + '"' + " AltUI:Menu is init")
    }

    open(): void {
      log('Method open')
    }

    close() {
      log(this._title + " menu is close")
    }

    submenu(options: submenu): subMenu {
      return new subMenu(options)
    }

    item(options: item): Item {
      let item = new Item(options)
      item.emited()
      return item
    }

  }

  class subMenu {

    private _title: string
    private _items: Array<Item>

    constructor(options: submenu) {
      this._title = options.title || "AltUI"
      this._items = options.items
    }

  }

  class Item extends AltEventsEmitter {

    private _title: string
    private _type: string
    private _description: string
    private _navigation: string

    constructor(options: item) {
      super()
      options.title ? this._title = options.title : (error("Title is missed for Item"), this._title = "AltUI")
      options.type == "button" || options.type == "checkbox" || options.type == "input" ? this._type = options.type : (error("Type is missed or Invalid for Item " + '"' + this._title + '"' + " AltUI:item"), this._type = null)
      options.description ? this._type = options.description : (debug("Description is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._description = null)
      options.navigation ? this._navigation = options.navigation : (debug("Navigation is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._navigation = null)
      this.init()
    }

    init() {
      this.on(e_Item.data, () => {})
      this.on(e_Item.click, () => {})
      log("Item " + '"' + this._title + '"' + " is init")
    }

    async emited() {
      await Wait(1)
      this.emit(e_Item.data, {title: this._title, type: this._type,  desc: this._description, nav: this._navigation})
      this.emit(this._type == "button" ? e_Item.click: this._type == "checkbox" ? e_Item.isCheck: this._type == "input" ? e_Item.change: (null && error('Miss type for this Item' + this._title)), {}) //todo Add eventlsitener pour le click du bouton
    }

    data() {
      return {title: this._title, type: this._type, desc: this._description, nav: this._navigation}
    }

    click() {
      
    }
  }

  interface notify { }

  export class Notify {
    constructor () { }
  }

  async function Wait(time: number): Promise<void> {
    return new Promise(function (success) {
        setTimeout(() => {
            success();
        }, time);
    });
  }

}
log('AltLUI Initialized (Menu [submenu], Item, Notify)')