import AbstractFactory from "./AbstractFactory";
import { IShape, Rectangle, Square } from "./Shape";

class ShapeFactory extends AbstractFactory{
    public getShape(shapeType: string): (IShape | null){
        if(shapeType === 'RECTANGLE'){
            return new Rectangle()
        }
        else if(shapeType === 'SQUARE'){
            return new Square()
        }
        return null;
    }
}

export default ShapeFactory