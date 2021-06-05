import {v4} from 'uuid'

interface Player {
    id: string;
    name: string;
    life: number;
    power: number;
    friends: Player[];
    punch: (player: Player) => void; 
    greet: (player: Player) => void;
    noGreet: (player: Player) => void; 
    newFriend: (player: Player) => void;
    loseLife: (damage: number) => void;
}


abstract class Factory {
    public abstract factory(): Player;

    public punchEnemie(enemy: Factory): void {
        const player = this.factory();
        player.punch(enemy.factory());
        return;
    }

    public greetFriend(friend: Factory): void {
        const player = this.factory()
        if(player.friends.length < 1){
            player.noGreet(friend.factory())
            return;
        }
        for(let i = 0; i < player.friends.length; i++){
            if(player.friends[i].id === friend.factory().id){
                player.greet(friend.factory())
                break;
            }else{
               if(i === player.friends.length - 1){
                    player.noGreet(friend.factory())
                    break;
               }
               continue;
            }
        }
        return;
    }

    public addFriend(friend: Factory): void {
        const player = this.factory()
        player.newFriend(friend.factory())
        return;
    }
}

class ConcreteFactoryKing extends Factory{
    private name: string;
    constructor(name: string){
        super();
        this.name = name;
    }
    public factory(): Player {
        return new ConcreteKing(this.name);
    }
}

class ConcreteFactoryMage extends Factory{
    private name: string;
    constructor(name: string){
        super();
        this.name = name;
    }
    public factory(): Player {
        return new ConcreteMage(this.name);
    }
}


class ConcreteKing implements Player {
    id: string;
    name: string;
    power: number;
    life: number;
    friends: Player[]
    constructor(name: string){
        this.id = v4();
        this.name = name;
        this.power = 3000;
        this.life = 35000;
        this.friends = []
    }
    greet(player: Player): void {
        console.log(`Hello my friend ${player.name}`)
        return;
    }
    noGreet(player: Player): void {
        console.log(`Bye, you are not my friend ${player.name}`)
        return;
    }
    punch(enemy: Player): void {
        console.log("punch:", enemy.life)
        enemy.loseLife(this.power)
        console.log("enemie life:", enemy.life)
        return;
    }
    newFriend(player: Player): void {
        this.friends.push(player)
        return;
    }
    loseLife(damage: number): void {
        this.life -= damage;
        return;
    }
}

class ConcreteMage implements Player {
    id: string;
    name: string;
    power: number;
    life: number;
    friends: Player[]
    constructor(name: string){
        this.id = v4();
        this.name = name;
        this.power = 3000;
        this.life = 35000;
        this.friends = []
    }
    greet(player: Player): void {
        console.log("greet: ", player)
        return;
    }
    noGreet(player: Player): void {
        console.log("noGreet: ", player)
        return;

    }
    punch(enemy: Player): void {
        console.log("punch:", enemy.life)
        enemy.loseLife(this.power)
        console.log("enemie life:", enemy.life)
        return;
    }
    newFriend(player: Player): void {
        this.friends.push(player)
        return;
    }
    loseLife(damage: number): void {
        this.life -= damage;
        return;
    }
}

function simulate(king: Factory, mage: Factory): void{
    king.greetFriend(mage)
    king.punchEnemie(mage);
    return
}

(() => {
    simulate(new ConcreteFactoryKing("User_22"), new ConcreteFactoryMage("xXFinishPlayerxX"))
})()