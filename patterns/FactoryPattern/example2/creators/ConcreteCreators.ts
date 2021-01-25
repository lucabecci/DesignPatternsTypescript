import {Creator} from '../factory'
import {Product} from '../interfaces/Product'
import { ConcreteProduct1, ConcreteProduct2 } from '../products/ConcreteProducts';

export class ConcreteCreator1 extends Creator{
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

export class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}