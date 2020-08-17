"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = require("./Content");
const ButtonList_1 = require("./ButtonList");
const Header_1 = require("./Header");
const ArticleList_1 = require("./ArticleList");
class ListContent extends Content_1.default {
    constructor(title = '', ...items) {
        super();
        this.articleList = new ArticleList_1.default();
        this.buttons = new ButtonList_1.default();
        this.buttonLayout = 'Vertical';
        this.header = new Header_1.default(title);
        this.rank = false;
        for (let item of items)
            this.articleList.push(item);
    }
    get ArticleList() {
        return this.articleList;
    }
    get Buttons() {
        return this.buttons;
    }
    get ButtonLayout() {
        return this.buttonLayout;
    }
    get Header() {
        return this.header;
    }
    get Rank() {
        return this.rank;
    }
    set ArticleList(query) {
        this.articleList = query;
    }
    set Buttons(query) {
        this.buttons = query;
    }
    set ButtonLayout(query) {
        this.buttonLayout = query;
    }
    set Header(query) {
        this.header = query;
    }
    set Rank(query) {
        this.rank = query;
    }
    toJson() {
        return {
            ITL: this.articleList.toJson(),
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            HD: this.header.toJson(),
            RK: this.rank
        };
    }
}
exports.default = ListContent;
