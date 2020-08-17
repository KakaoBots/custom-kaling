"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class Commerce extends Component_1.default {
    constructor(regularPrice = 0, discountPrice = 0, rate = 0) {
        super();
        this.currencyUnit = '원';
        this.currentPosition = 0;
        this.discountPrice = discountPrice;
        this.amount = 0;
        this.rate = rate;
        this.promotion = '';
        this.regularPrice = regularPrice;
    }
    get CurrencyUnit() {
        return this.currencyUnit;
    }
    get CurrentPosition() {
        return this.currentPosition;
    }
    get DiscountPrice() {
        return this.discountPrice;
    }
    get Amount() {
        return this.amount;
    }
    get Rate() {
        return this.rate;
    }
    get Promotion() {
        return this.promotion;
    }
    get RegularPrice() {
        return this.regularPrice;
    }
    set CurrencyUnit(query) {
        this.currencyUnit = query;
    }
    set CurrentPosition(query) {
        this.currentPosition = query;
    }
    set DiscountPrice(query) {
        this.discountPrice = query;
    }
    set Amount(query) {
        this.amount = query;
    }
    set Rate(query) {
        this.rate = query;
    }
    set Promotion(query) {
        this.promotion = query;
    }
    set RegularPrice(query) {
        this.regularPrice = query;
    }
    toJson() {
        return {
            CU: this.currencyUnit,
            CP: this.currentPosition,
            DP: this.discountPrice,
            FD: this.amount,
            DR: this.rate,
            PM: this.promotion,
            RP: this.regularPrice
        };
    }
}
exports.default = Commerce;
//# sourceMappingURL=Commerce.js.map