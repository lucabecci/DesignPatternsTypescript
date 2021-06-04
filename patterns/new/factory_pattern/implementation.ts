import {v5} from 'uuid'

interface Player {
    id: string;
    name: string;
    life: number;
    power: number;
    friends: Player[];
    punch: (player: Player) => void; 
    greet: (player: Player) => void;
    noGreet: (player: Player) => void; 
}


abstract class Factory {
    public abstract factory(): Player;

    public punchEnemie(enemy: Player): void {
        const player = this.factory();
        player.punch(enemy);
        return;
    }

    public greatFriend(friend: Player): void {
        const player = this.factory()
        for(let i = 0; i < player.friends.length; i++){
            if(player.friends[i].id === friend.id){
                player.greet(friend)
                break;
            }else{
               if(i === player.friends.length - 1){
                    player.noGreet(friend)
                    break;
               }
               continue;
            }
        }
        return;
    }
}

class ConcreteFactoryKing extends Factory{
    private name: string;
    constructor(name: string){
        super();
        this.name = name;
    }
    public factory(): null {
        return null;
    }
}

class ConcreteFactoryMage extends Factory{
    public factory(): null {
        return null;
    }
}