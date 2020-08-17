"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentList_1 = require("../ComponentList");
class ArticleList extends ComponentList_1.default {
    constructor(...articleListItem) {
        super(articleListItem);
    }
    toJson() {
        const result = [];
        for (let articleListItem of this) {
            result.push(articleListItem.toJson());
        }
        return result;
    }
}
exports.default = ArticleList;
