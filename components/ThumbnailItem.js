"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class ThumbnailItem extends Component_1.default {
    constructor(thumbnail = '', width = 0, height = 0) {
        super();
        this.thumbnail = thumbnail;
        this.width = width;
        this.height = height;
        this.isLive = false;
        this.playTime = 0;
        this.crop = false;
    }
    get Height() {
        return this.height;
    }
    get Crop() {
        return this.crop;
    }
    get IsLive() {
        return this.isLive;
    }
    get PlayTime() {
        return this.playTime;
    }
    get Thumbnail() {
        return this.thumbnail;
    }
    get Width() {
        return this.width;
    }
    set Height(query) {
        this.height = query;
    }
    set Crop(query) {
        this.crop = query;
    }
    set IsLive(query) {
        this.isLive = query;
    }
    set PlayTime(query) {
        this.playTime = query;
    }
    set Thumbnail(query) {
        this.thumbnail = query;
    }
    set Width(query) {
        this.width = query;
    }
    toJson() {
        return {
            H: this.height,
            SC: this.crop ? 0 : 1,
            LI: this.isLive,
            PT: this.playTime,
            THU: this.thumbnail,
            W: this.width
        };
    }
}
exports.default = ThumbnailItem;
//# sourceMappingURL=ThumbnailItem.js.map