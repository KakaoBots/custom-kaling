"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = require("./Content");
const ContentList_1 = require("./ContentList");
const MessageType = require("../models/MessageType").MessageType;
class SlideContent extends Content_1.default {
    constructor(cardType = MessageType.FEED, ...items) {
        super();
        this.cardType = cardType;
        this.contentList = new ContentList_1.default();
        this.contentHead = null;
        this.contentTail = null;
        this.contentList.push(...items);
    }
    get CardType() {
        return this.cardType;
    }
    get ContentList() {
        return this.contentList;
    }
    get ContentHead() {
        return this.contentHead;
    }
    get ContentTail() {
        return this.contentTail;
    }
    set CardType(query) {
        this.cardType = query;
    }
    set ContentList(query) {
        this.contentList = query;
    }
    set ContentHead(query) {
        this.contentHead = query;
    }
    set ContentTail(query) {
        this.contentTail = query;
    }
    toJson() {
        const obj = {
            CTP: this.cardType,
            CIL: this.contentList.toJson()
        };
        if (this.contentHead)
            obj.CHD = this.contentHead.toJson();
        if (this.contentTail)
            obj.CTA = this.contentTail.toJson();
        return obj;
    }
}
exports.default = SlideContent;
