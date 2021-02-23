"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ButtonList_1 = require("./ButtonList");
const Link_1 = require("./Link");
const TextItem_1 = require("./TextItem");
const ThumbnailList_1 = require("./ThumbnailList");
const Profile_1 = require("./Profile");
const Commerce_1 = require("./Commerce");
const Content_1 = require("./Content");
class CommerceContent extends Content_1.default {
    constructor(title = '', description = '', link = new Link_1.default(''), regularPrice = 0, discountPrice = 0, rate = 0) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.buttons = new ButtonList_1.default();
        this.buttonLayout = 'Vertical';
        this.commerce = new Commerce_1.default(regularPrice, discountPrice, rate);
        this.link = link;
        this.profile = new Profile_1.default();
        this.textItem = new TextItem_1.default(title, description);
        this.thumbnailList = new ThumbnailList_1.default();
    }
    get Title() {
        return this.textItem.Title;
    }
    get Description() {
        return this.textItem.Description;
    }
    get Link() {
        return this.link;
    }
    get Buttons() {
        return this.buttons;
    }
    get ButtonLayout() {
        return this.buttonLayout;
    }
    get Profile() {
        return this.profile;
    }
    get ThumbnailList() {
        return this.thumbnailList;
    }
    get Commerce() {
        return this.commerce;
    }
    set Title(query) {
        this.textItem.Title = query;
    }
    set Description(query) {
        this.textItem.Description = query;
    }
    set Link(query) {
        this.link = query;
    }
    set Buttons(query) {
        this.buttons = query;
    }
    set ButtonLayout(query) {
        this.buttonLayout = query;
    }
    set Profile(query) {
        this.profile = query;
    }
    set ThumbnailList(query) {
        this.thumbnailList = query;
    }
    set Commerce(query) {
        this.commerce = query;
    }
    toJson() {
        return {
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            CMC: this.commerce.toJson(),
            L: this.link.toJson(),
            PR: this.profile.toJson(),
            TI: this.textItem.toJson(),
            THC: this.thumbnailList.length,
            THL: this.thumbnailList.toJson()
        };
    }
}
exports.default = CommerceContent;
