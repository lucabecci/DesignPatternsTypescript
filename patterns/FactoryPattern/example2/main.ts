import { ConcreteCreator1, ConcreteCreator2 } from './creators/ConcreteCreators';
import {Creator} from './factory'

function creatorProduct(creator: Creator){
    console.log(creator.someOperation());
}

creatorProduct(new ConcreteCreator1)

console.log('////////////////////')

creatorProduct(new ConcreteCreator2)