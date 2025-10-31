

export class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string){
        this.name = 'name';
        this.address = 'address';
    }
}

const ironman = new Person('Iroman','New York');
console.log(ironman);



