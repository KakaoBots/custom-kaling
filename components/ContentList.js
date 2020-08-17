"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentList_1 = require("../ComponentList");
class ContentList extends ComponentList_1.default {
    constructor(...contentListItem) {
        super(contentListItem);
    }
    toJson() {
        const result = [];
        for (let contentListItem of this) {
            result.push(contentListItem.toJson());
        }
        return result;
    }
}
exports.default = ContentList;