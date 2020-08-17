"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
const TitleDescription_1 = require("./TitleDescription");
const ThumbnailItem_1 = require("./ThumbnailItem");
class ArticleListItem extends Component_1.default {
    constructor(title = '', description = '', thumbnail = '', link = new Link_1.default('')) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem_1.default(thumbnail);
        this.text = new TitleDescription_1.default(title, description);
    }
    get Link() {
        return this.link;
    }
    get Image() {
        return this.thumbnail;
    }
    get Text() {
        return this.text;
    }
    set Link(query) {
        this.link = query;
    }
    set Image(query) {
        this.thumbnail = query;
    }
    set Text(query) {
        this.text = query;
    }
    toJson() {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson(),
            TD: this.text.toJson()
        };
    }
}
exports.default = ArticleListItem;
//# sourceMappingURL=ArticleListItem.js.map