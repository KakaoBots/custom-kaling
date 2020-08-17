"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
const ThumbnailItem_1 = require("./ThumbnailItem");
class Thumbnail extends Component_1.default {
    constructor(thumbnail = '', link = new Link_1.default(''), width = 0, height = 0) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem_1.default(thumbnail, width, height);
    }
    get Link() {
        return this.link;
    }
    get Thumbnail() {
        return this.thumbnail;
    }
    set Link(query) {
        this.link = query;
    }
    set Thumbnail(query) {
        this.thumbnail = query;
    }
    toJson() {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson()
        };
    }
}
exports.default = Thumbnail;
