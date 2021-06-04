class Shape {
    public draw(): void{}
}

export interface IShape {
    draw: () => void
}

export class RoundedRectangule implements Shape{
    public draw(): void{
        console.log("Inside RoundedRectangule::draw() method.");
    }
}

export class RoundedSquare implements Shape{
    public draw(): void{
        console.log("Inside RoundedSquare::draw() method.");
    }
}

export class Rectangle implements Shape{
    public draw(): void{
        console.log("Inside Rectangle::draw() method.");
    }
}
export class Square implements Shape{
    public draw(): void{
        console.log("Inside Square::draw() method.");
    }
}

export default Shape