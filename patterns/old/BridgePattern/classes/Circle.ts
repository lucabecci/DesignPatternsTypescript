import DrawAPI from "../interfaces/DrawAPI";
import Shape from "./Shape";

class Circle extends Shape{
    private radius: number
    private x: number
    private y: number

    constructor(
        radius: number,
        x: number,
        y: number,
        drawAPI: DrawAPI 
    ){
        super(drawAPI)
        this.radius = radius
        this.x = x
        this.y = y
    }

    public draw(): void{
        this.drawAPI.drawCircle(this.radius, this.x, this.y)
    }
}

export default Circle