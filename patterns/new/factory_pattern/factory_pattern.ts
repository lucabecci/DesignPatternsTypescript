interface Product {
    operation(): string;
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string{
        const product = this.factoryMethod();
        return `Product operation: ${product.operation()}`
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return `Result of the ConcreteProduct1`;
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return `Result of the ConcreteProduct2`;
    }
}

function creatorCode(creator: Creator){
    console.log(creator.someOperation())
}


(() => {
    console.log("Lauched the ConcreteCreator 1 ")
    creatorCode(new ConcreteCreator1())
    console.log('\n')
    console.log("Lauched the ConcreteCreator 2")
    creatorCode(new ConcreteCreator2())
})()

