import Item from "./item.js"

export default interface submenu {
  title?: string
  items?: Array<Item>,
  success?: (success: boolean) => void,
  error?: (error: string) => void
}

export class subMenu {

  private _title: string
  private _items: Array<Item>

  constructor(options: submenu) {
    this._title = options.title || "AltUI"
    this._items = options.items
  }

}