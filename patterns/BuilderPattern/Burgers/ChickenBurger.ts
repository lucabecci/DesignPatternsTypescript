import Burger from "./Burger";

class ChickenBurger extends Burger{
    public price(): number {
        return 50.55;
    }

    public name(): string {
        return 'Chicken Burger'
    }
}

export default ChickenBurger