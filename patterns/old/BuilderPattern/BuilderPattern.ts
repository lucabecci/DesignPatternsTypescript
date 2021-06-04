import MealBuilder from "./MealBuilder";

class BuilderPattern {
    public static builder(){
        const mealBuilder: MealBuilder = new MealBuilder

        const vegMeal = mealBuilder.prepareVegMeal() 
        console.log('veg meal')
        vegMeal.showItems()
        console.log(`total price: ${vegMeal.getCost()}`)
        //non veg
        const nonVegMeal = mealBuilder.prepareNonVegMeal() 
        console.log('non veg meal')
        nonVegMeal.showItems()
        console.log(`total price: ${nonVegMeal.getCost()}`)
    }
}

BuilderPattern.builder()

export default BuilderPattern