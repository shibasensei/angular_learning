"use strict";
// class PointClass implements Point {
//     constructor(){
Object.defineProperty(exports, "__esModule", { value: true });
//     }
//     draw(){
//     }
// }
var pointX_1 = require("./pointX");
function log(msg) {
    console.log(msg);
}
var msg = "test";
log(msg);
var a = 5;
// a = "qwe";
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, "wer", 231.23];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
var test;
test = "qwer";
var test2 = test.endsWith("r");
var test3 = test.endsWith("r");
var doLog = function (msg) {
    console.log(msg);
};
var draw = function (point) {
    //....
};
draw({
    x: 1,
    y: 2
});
var draw2 = function (point) {
    //....
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("tewt" + this.x);
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    return Point;
}());
var a2 = new Point();
a2.draw();
a2.setX(5);
a2.draw();
var draw3 = function (point) {
    //....
};
var a4 = new pointX_1.PointX(24);
a4.draw();
a4.y = 123;
console.log(a4.y);
