// class PointClass implements Point {
//     constructor(){

//     }
//     draw(){

//     }
// }
import { PointX } from './pointX'

function log(msg:any){
    console.log(msg);
}

var msg = "test";

log(msg);


let a = 5;
// a = "qwe";

let b:number;
let c:boolean;
let d:string;
let e:number[]=  [1,2,3];
let f:any[] = [1,"wer", 231.23];


enum Color {
    Red=0,Green=1,Blue=2
};

let color:Color = Color.Green;


let test;
test = "qwer";

let test2 = (<string>test).endsWith("r");

let test3 = (test as string).endsWith("r");

let doLog = (msg:any) =>{
    console.log(msg);
}

let draw = (point:object)=>{
    //....
}

draw({
    x:1,
    y:2
});


let draw2 = (point:{x:number,y:number})=>{
    //....
}

class Point{
    private x?:number;
    private y?:number;

    constructor(x?:number,y?:number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("tewt"+this.x);
    }
    setX(x:number){
        this.x = x;
    }
}

let a2:Point = new Point();
a2.draw();
a2.setX(5);
a2.draw();


let draw3 = (point:Point)=>{
    //....
}




let a4:PointX = new PointX(24);

a4.draw();
a4.y = 123;
console.log(a4.y)
