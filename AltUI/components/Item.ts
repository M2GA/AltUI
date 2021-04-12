import AltUI from "../AltUI.js";
// import Sprite from "../modules/Sprite";
// import Color from "../utils/Color";
import UUIDV4 from "../module/Uid4.js";

export default class Item {
    public readonly Id: string = UUIDV4();

    // public static readonly DefaultBackColor: Color = Color.Empty;
    // public static readonly DefaultHighlightedBackColor: Color = Color.White;
    // public static readonly DefaultForeColor: Color = Color.WhiteSmoke;
    // public static readonly DefaultHighlightedForeColor: Color = Color.Black;

    private _event: { event: string; args: any[] };

    protected _label: string;
    protected _description: string;
    protected _badge: string;

    // public BackColor: string = UIMenuItem.DefaultBackColor;

    public Enabled: boolean;
    public Selected: boolean;
    public Hovered: boolean;
    public Data: any;

    public Parent: AltUI;

    public get Label() {
        return this._label;
    }
    public set Label(text) {
        this._label = text;
    }

    public get Description() {
        return this._description;
    }
    public set Description(text) {
        this._description = text;
    }

    constructor(text: string, description: string = "", data: any = null) {
        this.Description = description;
        this.Enabled = true;
        this.Data = data;
    }

    public addEvent(event: string, ...args: any[]) {
        this._event = { event: event, args: args };
    }

    public fireEvent() {
        if (this._event) {
            //alt.emit(this._event.event, ...this._event.args);
        }
    }

    public Draw() {
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

    public SetBadge(badge: string) {
        this._badge = badge;
    }

    public SetLabel(text: string) {
        this._label = text;
    }
}