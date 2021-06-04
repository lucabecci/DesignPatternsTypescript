import DrawAPI from '../interfaces/DrawAPI'

class GreenCircle implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number): void{
        console.log(`Drawing circle[color: green, radius: ${radius}, x: ${x}, y: ${y}] `)
    }
}

export default GreenCircle