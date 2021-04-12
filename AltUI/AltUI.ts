// Modules
import AltLog from "./module/AltLog.js";
import AltEvent from "./module/AltEvent.js";
import Wait  from "./module/Wait.js";
import Uid4 from "./module/Uid4.js"

// Components
import Item from "./components/Item"
import ItemList from "./components/itemList.js"
import Button from "./components/button.js"
import subMenu from "./components/subMenu.js"

const {log, debug, error} = new AltLog


export default class AltUI {

  private Id: string = Uid4()
  private _visible: boolean = false

  private _title: string
  private _subTitle: string
  private _activeItem: number = 1000
  private _buttonEnnable: boolean = true
    
  private Mouse: boolean = false
  public ParentMenu: AltUI = null

  public MenuItems: (Item)[] = []

  // Events
  private readonly IndexChange = new AltEvent()
  private readonly MenuOpen = new AltEvent()
  private readonly MenuClose = new AltEvent()

  public get Uid(): string {
    return this.Id
  }

  public get Title(): string {
    return this._title
  }

  public set Title(text: string) {
    this._title = text
  } 

  public get SubTitle(): string {
    return this._subTitle
  }

  public set SubTitle(text: string) {
    this._subTitle = text
  }

  public get Visible(): boolean {
    return this._visible
  }

  public set Visible(toggle: boolean) {
    this._visible = toggle
    if (toggle) this.MenuOpen.emit()
  }

  public get CurrentSelector() {
    return this._activeItem % this.MenuItems.length
  }

  public set CurrentSelector(v) {
    this.IndexChange.emit(this.CurrentSelector, this.MenuItems[this._activeItem % this.MenuItems.length])
  }

  constructor(title: string, subTitle: string,) {
    this._title = title
    this._subTitle = subTitle
  }

  public AddItem(item: Item) {
    this.MenuItems.push(item)
    this.RefreshIndex()
  }

  public RefreshIndex() {

  }

  public Clear() {
    this.MenuItems = []
  }

  public Open() {
    this.Visible = true
  }

  public Close() {
    this.Visible = false
    this.MenuClose.emit(true)
  }

  public SelectItem() {
    if (!this.MenuItems[this.CurrentSelector].Enabled) {
      // Audio
       return
    }
  }

  public ProcessControl() {
    if (!this.Visible) return
  }

  public BindItem(MenuToBind: AltUI, ItemToBind: Item) {
    if (!this.MenuItems.indexOf(ItemToBind)) { this.AddItem(ItemToBind) }

    MenuToBind
  }

  public AddSubMenu() {

  }
}
log('AltLUI Initialized')