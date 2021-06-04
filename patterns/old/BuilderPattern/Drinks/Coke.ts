import ColdDrink from "./ColdDrink";

class Coke extends ColdDrink{
    public price(): number {
        return 30.99;
    }

    public name(): string {
        return 'Coke'
    }
}

export default Coke