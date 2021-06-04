import Item from "../Item";
import Wrapper from "../Wrapper";

abstract class Burger implements Item{
    public packing(): Wrapper {
        return new Wrapper
    }
    public abstract price(): number
}

export default Burger