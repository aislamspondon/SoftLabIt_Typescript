import {isPlayer} from '../interface/isPlayer.js'
export class Player implements isPlayer{
    // private name:string;
    // private age:number;
    // readonly country:string;

    // constructor(n:string, a:number, c:string){
    //     this.name = n
    //     this.age = a
    //     this.country = c
    // }
    

    constructor(
        public name:string,
        private age:number,
        readonly country:string,)
        {}
    
    getAge(){
        return this.age;
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
