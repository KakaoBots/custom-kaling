"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class KakaoLinkInfo extends Component_1.default {
    constructor() {
        super();
        this.appID = '432166'; // 카카오톡 디벨로퍼에서의 appID 값
        this.templateID = '3139';
    }
    toJson() {
        return {
            ai: this.appID,
            ti: this.templateID
        };
    }
}
exports.default = KakaoLinkInfo;
