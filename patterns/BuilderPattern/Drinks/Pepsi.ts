import ColdDrink from "./ColdDrink";

class Pepsi extends ColdDrink{
    public price(): number {
        return 25.99;
    }

    public name(): string {
        return 'Pepsi'
    }
}

export default Pepsi