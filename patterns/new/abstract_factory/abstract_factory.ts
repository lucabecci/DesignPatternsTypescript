interface AbstractFactory {
    createProductA(): any;
    createProductB(): any;
}
//#region Factorys of A and B
class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}
//#endregion

//#region Products A with abstract interface
interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return "The result of the product A1."
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return "The result of the product A2."
    }
}
//#endregion

//#region Products B with abstract interface
interface AbstractProductB {
    usefulFunctionB(): string;
    ahoterUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return "the result of the product B1."
    }

    public ahoterUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `the result of the B1 collaborating with the (${result})`
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return "the result of the product B2."
    }

    public ahoterUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `the result of the B2 collaborating with the (${result})`
    }
}
//#endregion

//#region Runnable 
function runnable(factory: AbstractFactory): void {
    const productA: AbstractProductA = factory.createProductA();
    const productB: AbstractProductB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.ahoterUsefulFunctionB(productA))
}
//#endregion

(() => {
    console.log("Testing with the first factory type...")
    runnable(new ConcreteFactory1())

    console.log('\n')

    console.log("Testing with the second factory type...")
    runnable(new ConcreteFactory2())
})()