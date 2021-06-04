import AbstractFactory from "./AbstractFactory";
import { IShape, RoundedRectangule, RoundedSquare } from "./Shape";

class RoundedShapeFactory extends AbstractFactory{
    public getShape(shapeType: string): (IShape | null){
        if(shapeType === 'RECTANGLE'){
            return new RoundedRectangule()
        }
        else if(shapeType === 'SQUARE'){
            return new RoundedSquare()
        }
        return null;
    }
}

export default RoundedShapeFactory