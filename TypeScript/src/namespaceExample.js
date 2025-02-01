"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperations = void 0;
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function substract(a, b) {
        return a - b;
    }
    MathOperations.substract = substract;
    MathOperations.PI = 3.14;
})(MathOperations || (exports.MathOperations = MathOperations = {}));
