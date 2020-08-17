"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentList extends Array {
    constructor(components) {
        super();
        for (let component of components)
            this.push(component);
    }
}
exports.default = ComponentList;
