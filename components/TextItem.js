"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
const TitleDescription_1 = require("./TitleDescription");
class TextItem extends Component_1.default {
    constructor(title = '', description = '', link = new Link_1.default(''), isFullText = true) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.titleDescription = new TitleDescription_1.default(title, description);
        this.link = link;
        this.isFullText = isFullText;
    }
    get Title() {
        return this.titleDescription.Title;
    }
    get Description() {
        return this.titleDescription.Description;
    }
    get Link() {
        return this.link;
    }
    get IsFullText() {
        return this.isFullText;
    }
    set Title(query) {
        this.titleDescription.Title = query;
    }
    set Description(query) {
        this.titleDescription.Description = query;
    }
    set Link(query) {
        this.link = query;
    }
    set IsFullText(query) {
        this.isFullText = query;
    }
    toJson() {
        return {
            TD: this.titleDescription.toJson(),
            L: this.link.toJson(),
            FT: this.isFullText
        };
    }
}
exports.default = TextItem;
//# sourceMappingURL=TextItem.js.map