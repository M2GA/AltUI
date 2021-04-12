// Modules
import AltLog from "./module/AltLog.js";
import AltEvent from "./module/AltEvent.js";
import Uid4 from "./module/Uid4.js";
const { log, debug, error } = new AltLog;
export default class AltUI {
    constructor(title, subTitle) {
        this.Id = Uid4();
        this._visible = false;
        this._activeItem = 1000;
        this._buttonEnnable = true;
        this.Mouse = false;
        this.ParentMenu = null;
        this.MenuItems = [];
        // Events
        this.IndexChange = new AltEvent();
        this.MenuOpen = new AltEvent();
        this.MenuClose = new AltEvent();
        this._title = title;
        this._subTitle = subTitle;
    }
    get Uid() {
        return this.Id;
    }
    get Title() {
        return this._title;
    }
    set Title(text) {
        this._title = text;
    }
    get SubTitle() {
        return this._subTitle;
    }
    set SubTitle(text) {
        this._subTitle = text;
    }
    get Visible() {
        return this._visible;
    }
    set Visible(toggle) {
        this._visible = toggle;
        if (toggle)
            this.MenuOpen.emit();
    }
    get CurrentSelector() {
        return this._activeItem % this.MenuItems.length;
    }
    set CurrentSelector(v) {
        this.IndexChange.emit(this.CurrentSelector, this.MenuItems[this._activeItem % this.MenuItems.length]);
    }
    AddItem(item) {
        this.MenuItems.push(item);
        this.RefreshIndex();
    }
    RefreshIndex() {
    }
    Clear() {
        this.MenuItems = [];
    }
    Open() {
        this.Visible = true;
    }
    Close() {
        this.Visible = false;
        this.MenuClose.emit(true);
    }
    SelectItem() {
        if (!this.MenuItems[this.CurrentSelector].Enabled) {
            // Audio
            return;
        }
    }
    ProcessControl() {
        if (!this.Visible)
            return;
    }
    BindItem(MenuToBind, ItemToBind) {
        if (!this.MenuItems.indexOf(ItemToBind)) {
            this.AddItem(ItemToBind);
        }
        MenuToBind;
    }
    AddSubMenu() {
    }
}
log('AltLUI Initialized');
