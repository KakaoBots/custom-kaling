"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const ThumbnailItem_1 = require("./ThumbnailItem");
const Link_1 = require("./Link");
const index_1 = require("../index");
class Profile extends Component_1.default {
    constructor(name = '', icon = '', link = new Link_1.default(''), width = 0, height = 0) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem_1.default(icon, width, height);
        this.title = new index_1.TitleDescription(name);
    }
    get Link() {
        return this.link;
    }
    get Image() {
        return this.thumbnail;
    }
    get Text() {
        return this.title;
    }
    set Link(query) {
        this.link = query;
    }
    set Image(query) {
        this.thumbnail = query;
    }
    set Text(query) {
        this.title = query;
    }
    toJson() {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson(),
            TD: this.title.toJson()
        };
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map