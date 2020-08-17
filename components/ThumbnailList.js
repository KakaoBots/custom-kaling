"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentList_1 = require("../ComponentList");
class ThumbnailList extends ComponentList_1.default {
    constructor(...thumbnails) {
        super(thumbnails);
    }
    toJson() {
        const result = [];
        for (let thumbnail of this) {
            result.push(thumbnail.toJson());
        }
        return result;
    }
}
exports.default = ThumbnailList;
//# sourceMappingURL=ThumbnailList.js.map