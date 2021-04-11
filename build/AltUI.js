import { AltLog } from "./AltLog.js";
import { AltEventsEmitter } from "./AltEventsEmiter.js";
const { log, debug, error } = new AltLog;
export var AltUI;
(function (AltUI) {
    class Menu {
        constructor(options) {
            options.title ? this._title = options.title : (debug("Missing title Menu"), this._title = "ALtUI");
            options.items ? this._items = options.items : error("Missing Item in Menu");
            options.items ? this._submenu = options.submenus : null;
            this.init();
        }
        init() {
            log(this._title + " menu is init for");
            log("Number of Item(s) " + this._items.length + " In " + this._title + " Menu");
            return this._title;
        }
        open() {
            return log(this._title + " menu is open");
        }
        close() {
            log(this._title + " menu is close");
        }
        item(title) {
            let item;
            for (const i in this._items)
                this._items[i].data().title == title ? item = this._items[i] : null;
            item.dataa();
            return item;
        }
    }
    AltUI.Menu = Menu;
    class subMenu {
        constructor(options) {
            this._title = options.title || "AltUI";
            this._items = options.items;
        }
    }
    AltUI.subMenu = subMenu;
    let itemType;
    (function (itemType) {
        itemType["data"] = "data";
        itemType["button"] = "button";
        itemType["checkbox"] = "checkbox";
    })(itemType || (itemType = {}));
    class Item extends AltEventsEmitter {
        constructor(options) {
            super();
            options.title ? this._title = options.title : (error("Title is missed for Item"), this._title = "AltUI");
            options.type == "button" || options.type == "checkbox" || options.type == "input" ? this._type = options.type : (error("Type is missed or Invalid for Item"), this._type = null);
            options.description ? this._type = options.description : (debug("Description is missed for Item"), this._description = null);
            options.navigation ? this._navigation = options.navigation : (debug("Navigation is missed for Item"), this._navigation = null);
            this.init();
        }
        init() {
            this.on(itemType.button || itemType.checkbox, () => { });
            this.on(itemType.data, () => { });
        }
        data() {
            return { title: this._title, type: this._type, desc: this._description, nav: this._navigation };
        }
        dataa() {
            this.emit(itemType.data, { title: this._title, type: this._type, desc: this._description, nav: this._navigation });
        }
    }
    AltUI.Item = Item;
    class Notify {
        constructor() {
        }
    }
    AltUI.Notify = Notify;
})(AltUI || (AltUI = {}));
log('AltLUI Initialized (Menu [submenu], Item, Notify)');
