"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const TitleDescription_1 = require("./TitleDescription");
class ImageTitle extends Component_1.default {
    constructor(title = '', thumbnail = '') {
        super();
        this.thumbnail = thumbnail;
        this.title = new TitleDescription_1.default(title);
    }
    get Thumbnail() {
        return this.thumbnail;
    }
    get Text() {
        return this.title;
    }
    set Thumbnail(query) {
        this.thumbnail = query;
    }
    set Text(query) {
        this.title = query;
    }
    toJson() {
        return {
            THU: this.thumbnail,
            TD: this.title.toJson()
        };
    }
}
exports.default = ImageTitle;
//# sourceMappingURL=ImageTitle.js.map