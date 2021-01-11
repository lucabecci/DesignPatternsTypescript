import Meal from "./Meal";
import VegBurger from './Burgers/VegBurger'
import Coke from './Drinks/Coke'

import ChickenBurger from './Burgers/ChickenBurger'
import Pepsi from './Drinks/Pepsi'

class MealBuilder {
    public prepareVegMeal(): Meal{
        let meal: Meal = new Meal()
        meal.addItem(new VegBurger)
        meal.addItem(new Coke())

        return meal
    }
    public prepareNonVegMeal(): Meal{
        let meal: Meal = new Meal()
        meal.addItem(new ChickenBurger)
        meal.addItem(new Pepsi)

        return meal
    }


}

export default MealBuilder