import RoundedShapeFactory from "./RoundedShapeFactory";
import ShapeFactory from "./ShapeFactory";

class FactoryProducer{
    public static getFactory(rounded: boolean){
        if(rounded){
            return new RoundedShapeFactory
        }
        else{
            return new ShapeFactory
        }
    }
}

export default FactoryProducer