import Circle from "./classes/Circle";
import GreenCircle from "./classes/GreenCircle";
import RedCircle from "./classes/RedCircle";
import Shape from "./classes/Shape";

class BridgePattern {
    public static generate(): void {
        const redCircle: Shape = new Circle(100, 100, 30, new RedCircle)
        const greenCircle: Shape = new Circle(400, 400, 70, new GreenCircle)

        redCircle.draw()
        greenCircle.draw()
    }
}

export default BridgePattern