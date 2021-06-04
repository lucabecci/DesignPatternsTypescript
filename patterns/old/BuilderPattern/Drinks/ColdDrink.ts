import Item from "../Item";
import Bottle from "../Bottle";

abstract class ColdDrink implements Item{
    public packing(): Bottle {
        return new Bottle
    }
    public abstract price(): number
}

export default ColdDrink