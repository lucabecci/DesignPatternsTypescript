import Item from "./Item";

class Meal {
    private items: Item[] = [];

    public addItem(item: Item): void{
        this.items.push(item)
    }

    public getCost(): number {
        let cost: number = 0

        this.items.forEach(item => {
            cost += item.price()
        });

        return cost
    }

    public showItems(): void{
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            
            console.log('Item:',item.name())
            console.log('Packing:',item.packing())
            console.log('Price:',item.price())
        }
    }
}

export default  Meal