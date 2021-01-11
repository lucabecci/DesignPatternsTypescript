import DrawAPI from '../interfaces/DrawAPI'

class RedCircle implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number): void{
        console.log(`Drawing circle[color: red, radius: ${radius}, x: ${x}, y: ${y}] `)
    }
}

export default RedCircle