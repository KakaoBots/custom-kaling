"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
const ThumbnailItem_1 = require("./ThumbnailItem");
const TitleDescription_1 = require("./TitleDescription");
class Header extends Component_1.default {
    constructor(name = '', icon = '', link = new Link_1.default('')) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.background = new ThumbnailItem_1.default();
        this.link = link;
        this.icon = icon;
        this.title = new TitleDescription_1.default(name);
    }
    get Background() {
        return this.background;
    }
    get Link() {
        return this.link;
    }
    get Icon() {
        return this.icon;
    }
    get Text() {
        return this.title;
    }
    set Background(query) {
        this.background = query;
    }
    set Link(query) {
        this.link = query;
    }
    set Icon(query) {
        this.icon = query;
    }
    set Text(query) {
        this.title = query;
    }
    toJson() {
        return {
            BG: this.background.toJson(),
            L: this.link.toJson(),
            ICO: this.icon,
            TD: this.title.toJson()
        };
    }
}
exports.default = Header;
