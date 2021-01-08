import FactoryProducer from "./FactoryProducer";

class AbstractFactoryPattern {
    public static main(){
        const shapeFactory = FactoryProducer.getFactory(false)

        const shape1 = shapeFactory.getShape('RECTANGLE')
        const shape2 = shapeFactory.getShape('SQUARE')

        shape1.draw()
        shape2.draw()

        //rounded

        const roundedShapeFactory = FactoryProducer.getFactory(true)

        const roundedShape1 = roundedShapeFactory.getShape('RECTANGLE')
        const roundedShape2 = roundedShapeFactory.getShape('SQUARE')

        roundedShape1.draw()
        roundedShape2.draw()


    }
}

export default AbstractFactoryPattern