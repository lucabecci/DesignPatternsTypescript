import Packing from "./Packing";

interface Item {
    name?(): string
    packing(): Packing
    price(): number
}

export default Item