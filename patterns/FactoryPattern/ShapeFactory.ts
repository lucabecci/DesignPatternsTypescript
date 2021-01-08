import { Circle, Rectangule, Square, IExtendedShape } from "./Shape"

class ShapeFactory {
    public GenerateShape(shapeType: string): IExtendedShape{
        if(shapeType === null){
            return null
        }
        else if(shapeType === 'CIRCLE'){
            return new Circle()
        }
        else if(shapeType === 'RECTANGULE'){
            return new Rectangule()
        }
        else if(shapeType === 'SQUARE'){
            return new Square()
        }
        return null
    }
}
export default ShapeFactory

export interface IShapeFactory{
    GenerateShape: (shapeType: string) => IExtendedShape
}
