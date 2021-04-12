var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AltLog } from "./AltLog.js";
import { AltEventsEmitter } from "./AltEventsEmiter.js";
const { log, debug, error } = new AltLog;
export var AltUI;
(function (AltUI) {
    let e_Menu;
    (function (e_Menu) {
        e_Menu["open"] = "open";
    })(e_Menu || (e_Menu = {}));
    let e_Item;
    (function (e_Item) {
        e_Item["data"] = "data";
        e_Item["click"] = "click";
        e_Item["isCheck"] = "isCheck";
        e_Item["change"] = "change";
    })(e_Item || (e_Item = {}));
    class Menu extends AltEventsEmitter {
        constructor(options) {
            super();
            options.title ? this._title = options.title : (debug("Missing title Menu"), this._title = "ALtUI");
            this.init();
        }
        init() {
            log('"' + this._title + '"' + " AltUI:Menu is init");
        }
        open() {
            log('Method open');
        }
        close() {
            log(this._title + " menu is close");
        }
        submenu(options) {
            return new subMenu(options);
        }
        item(options) {
            let item = new Item(options);
            item.emited();
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
    class Item extends AltEventsEmitter {
        constructor(options) {
            super();
            options.title ? this._title = options.title : (error("Title is missed for Item"), this._title = "AltUI");
            options.type == "button" || options.type == "checkbox" || options.type == "input" ? this._type = options.type : (error("Type is missed or Invalid for Item " + '"' + this._title + '"' + " AltUI:item"), this._type = null);
            options.description ? this._type = options.description : (debug("Description is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._description = null);
            options.navigation ? this._navigation = options.navigation : (debug("Navigation is missed for Item " + '"' + this._title + '"' + " AltUI:Item"), this._navigation = null);
            this.init();
        }
        init() {
            this.on(e_Item.data, () => { });
            this.on(e_Item.click, () => { });
            log("Item " + '"' + this._title + '"' + " is init");
        }
        emited() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Wait(1);
                this.emit(e_Item.data, { title: this._title, type: this._type, desc: this._description, nav: this._navigation });
                this.emit(this._type == "button" ? e_Item.click : this._type == "checkbox" ? e_Item.isCheck : this._type == "input" ? e_Item.change : (null && error('Miss type for this Item' + this._title)), {});
            });
        }
        data() {
            return { title: this._title, type: this._type, desc: this._description, nav: this._navigation };
        }
        click() {
        }
    }
    class Notify {
        constructor() { }
    }
    AltUI.Notify = Notify;
    function Wait(time) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (success) {
                setTimeout(() => {
                    success();
                }, time);
            });
        });
    }
})(AltUI || (AltUI = {}));
log('AltLUI Initialized (Menu [submenu], Item, Notify)');
