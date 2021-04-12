// import Sprite from "../modules/Sprite";
// import Color from "../utils/Color";
import UUIDV4 from "../module/Uid4.js";
export default class Item {
    constructor(text, description = "", data = null) {
        this.Id = UUIDV4();
        this.Description = description;
        this.Enabled = true;
        this.Data = data;
    }
    get Label() {
        return this._label;
    }
    set Label(text) {
        this._label = text;
    }
    get Description() {
        return this._description;
    }
    set Description(text) {
        this._description = text;
    }
    addEvent(event, ...args) {
        this._event = { event: event, args: args };
    }
    fireEvent() {
        if (this._event) {
            //alt.emit(this._event.event, ...this._event.args);
        }
    }
    Draw() {
        // this._rectangle.Size = new Size(431 + this.Parent.WidthOffset, 38);
        // this._selectedSprite.Size = new Size(431 + this.Parent.WidthOffset, 38);
        // if (this.Hovered && !this.Selected) {
        //     this._rectangle.Color = new Color(255, 255, 255, 20);
        //     this._rectangle.Draw();
        // }
        // this._selectedSprite.Color = this.Selected
        //     ? this.HighlightedBackColor
        //     : this.BackColor;
        // this._selectedSprite.Draw();
        // this._text.Color = this.Enabled
        //     ? this.Selected
        //         ? this.HighlightedForeColor
        //         : this.ForeColor
        //     : new Color(163, 159, 148);
        // if (this.LeftBadge != BadgeStyle.None) {
        //     this._text.Pos = new Point(35 + this.Offset.X, this._text.Pos.Y);
        //     this._badgeLeft.TextureDict = this.BadgeToSpriteLib(this.LeftBadge);
        //     this._badgeLeft.TextureName = this.BadgeToSpriteName(this.LeftBadge, this.Selected);
        //     this._badgeLeft.Color = this.IsBagdeWhiteSprite(this.LeftBadge)
        //         ? this.Enabled
        //             ? this.Selected
        //                 ? this.HighlightedForeColor
        //                 : this.ForeColor
        //             : new Color(163, 159, 148)
        //         : Color.White;
        //     this._badgeLeft.Draw();
        // } else {
        //     this._text.Pos = new Point(8 + this.Offset.X, this._text.Pos.Y);
        // }
        // if (this.RightBadge != BadgeStyle.None) {
        //     this._badgeRight.Pos = new Point(385 + this.Offset.X + this.Parent.WidthOffset, this._badgeRight.Pos.Y);
        //     this._badgeRight.TextureDict = this.BadgeToSpriteLib(this.RightBadge);
        //     this._badgeRight.TextureName = this.BadgeToSpriteName(this.RightBadge, this.Selected);
        //     this._badgeRight.Color = this.IsBagdeWhiteSprite(this.RightBadge)
        //         ? this.Enabled
        //             ? this.Selected
        //                 ? this.HighlightedForeColor
        //                 : this.ForeColor
        //             : new Color(163, 159, 148)
        //         : Color.White;
        //     this._badgeRight.Draw();
        // }
        // if (this.RightLabel && this.RightLabel !== "") {
        //     this._labelText.Pos = new Point(420 + this.Offset.X + this.Parent.WidthOffset, this._labelText.Pos.Y);
        //     this._labelText.Caption = this.RightLabel;
        //     this._labelText.Color = this._text.Color = this.Enabled
        //         ? this.Selected
        //             ? this.HighlightedForeColor
        //             : this.ForeColor
        //         : new Color(163, 159, 148);
        //     this._labelText.Draw();
        // }
        // this._text.Draw();
    }
    SetBadge(badge) {
        this._badge = badge;
    }
    SetLabel(text) {
        this._label = text;
    }
}
