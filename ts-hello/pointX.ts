export class PointX{

    constructor(public x?:number,private _y?:number){
        this.x = x;
        this._y = _y;
    }
    get y(){
        return (this._y as number);
    }
    set y(value:number){
        this._y = value;
    }
    draw() {
        console.log("tewt"+this.x);
    }

}

// module.exports =  PointX;