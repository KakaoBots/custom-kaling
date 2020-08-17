"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
const TitleDescription_1 = require("./TitleDescription");
class SlideCover extends Component_1.default {
    constructor(title = '', description = '', link = new Link_1.default()) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.text = new TitleDescription_1.default(title, description);
        this.link = link;
        this.thumbnail = null;
        this.background = null;
    }
    get Thumbnail() {
        return this.thumbnail;
    }
    get Background() {
        return this.background;
    }
    set Thumbnail(query) {
        this.thumbnail = query;
    }
    set Background(query) {
        this.background = query;
    }
    toJson() {
        let obj = {
            TD: this.text.toJson(),
            L: this.link.toJson()
        };
        if (this.thumbnail)
            obj.TH = this.thumbnail.toJson();
        if (this.background)
            obj.BG = this.background.toJson();
        return obj;
    }
}
exports.default = SlideCover;
