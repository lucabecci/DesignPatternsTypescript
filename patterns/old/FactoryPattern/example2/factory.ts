import { Product } from "./interfaces/Product"

export abstract class Creator {
    public abstract factoryMethod(): Product 

    public someOperation(): string {
        const product = this.factoryMethod()
        return `${product.operation()}`
    }
}

