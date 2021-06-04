class Shape {
    draw(): void{};
}

export class Rectangule implements Shape{
    draw(): void{
        console.log('Inside Rectangule: draw() method.');
    }
}

export class Circle implements Shape {
    draw(): void{
        console.log('Inside Circle: draw() method.')
    }
}

export class Square implements Shape {
    draw(): void{
        console.log('Inside Square: draw() method.')
    }
}


export interface IExtendedShape{
    draw: () => void
}

