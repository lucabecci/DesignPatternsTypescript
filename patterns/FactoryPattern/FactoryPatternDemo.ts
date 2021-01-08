import ShapeFactory, { IShapeFactory } from "./ShapeFactory";

class FactoryPatternDemo{
    private _shapeFactory: IShapeFactory
    constructor(){
        this._shapeFactory = new ShapeFactory()
    }

    public useShapeFactory(){
        const shape1 = this._shapeFactory.GenerateShape('CIRCLE')
        shape1.draw()

        const shape2 = this._shapeFactory.GenerateShape('RECTANGULE')
        shape2.draw()

        const shape3 = this._shapeFactory.GenerateShape('SQUARE')
        shape3.draw()
    }
}

export default FactoryPatternDemo