"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextItem_1 = require("./TextItem");
const Link_1 = require("./Link");
const Content_1 = require("./Content");
const ButtonList_1 = require("./ButtonList");
const Social_1 = require("./Social");
const ThumbnailList_1 = require("./ThumbnailList");
const Profile_1 = require("./Profile");
const Header_1 = require("./Header");
const ImageTitle_1 = require("./ImageTitle");
const ItemList_1 = require("./ItemList");
const ItemListSummary_1 = require("./ItemListSummary");
class FeedContent extends Content_1.default {
    constructor(title = '', description = '', link = new Link_1.default('')) {
        super();
        this.textItem = new TextItem_1.default(title, description, link, true);
        this.buttons = new ButtonList_1.default();
        this.buttonLayout = 'Vertical';
        this.header = new Header_1.default();
        this.imageTitle = new ImageTitle_1.default();
        this.itemList = new ItemList_1.default();
        this.itemListSummary = new ItemListSummary_1.default();
        this.profile = new Profile_1.default();
        this.social = new Social_1.default();
        this.thumbnailCount = 0;
        this.thumbnailList = new ThumbnailList_1.default();
    }
    get Title() {
        return this.textItem.Title;
    }
    get Description() {
        return this.textItem.Description;
    }
    get Link() {
        return this.textItem.Link;
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
    get ImageTitle() {
        return this.imageTitle;
    }
    get ItemList() {
        return this.itemList;
    }
    get ItemListSummary() {
        return this.itemListSummary;
    }
    get Profile() {
        return this.profile;
    }
    get Social() {
        return this.social;
    }
    get ThumbnailCount() {
        return this.thumbnailCount;
    }
    get ThumbnailList() {
        return this.thumbnailList;
    }
    set Title(query) {
        this.textItem.Title = query;
    }
    set Description(query) {
        this.textItem.Description = query;
    }
    set Link(query) {
        this.textItem.Link = query;
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
    set ImageTitle(query) {
        this.imageTitle = query;
    }
    set ItemList(query) {
        this.itemList = query;
    }
    set ItemListSummary(query) {
        this.itemListSummary = query;
    }
    set Profile(query) {
        this.profile = query;
    }
    set Social(query) {
        this.social = query;
    }
    set ThumbnailCount(query) {
        this.thumbnailCount = query;
    }
    set ThumbnailList(query) {
        this.thumbnailList = query;
    }
    toJson() {
        return {
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            HD: this.header.toJson(),
            IMT: this.imageTitle.toJson(),
            ITL: this.itemList.toJson(),
            ILS: this.itemListSummary.toJson(),
            PR: this.profile.toJson(),
            SO: this.social.toJson(),
            THC: this.thumbnailCount,
            TI: this.textItem.toJson(),
            THL: this.thumbnailList.toJson()
        };
    }
}
exports.default = FeedContent;
