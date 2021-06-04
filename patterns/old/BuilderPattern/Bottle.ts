import Packing from "./Packing";

class Bottle implements Packing{
    public pack(): string {
        return 'bottle'
    }
}

export default Bottle