"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointX = void 0;
var PointX = /** @class */ (function () {
    function PointX(x, _y) {
        this.x = x;
        this._y = _y;
        this.x = x;
        this._y = _y;
    }
    Object.defineProperty(PointX.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    PointX.prototype.draw = function () {
        console.log("tewt" + this.x);
    };
    return PointX;
}());
exports.PointX = PointX;
// module.exports =  PointX;
