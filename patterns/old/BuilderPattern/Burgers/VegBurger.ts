import Burger from "./Burger";

class VegBurger extends Burger{
    public price(): number{
        return 25.00;
    }
    public name(): string{
        return 'Veggie Burger'
    }
}

export default VegBurger