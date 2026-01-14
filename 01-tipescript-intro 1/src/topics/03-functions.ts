

function addNumbers (a:number, b:number):number {
    return a + b;
}

//Función de flecha
const addNumbersArrow = (a:number, b: number): string => {
    return `{a+ b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}



interface Character {
    name: string;
    hp:number;
    showHp: () => void;
}

const healCharacter = (character: Character,amount: number) => {
    character.hp += amount;
}


const strider: Character = {
    name: 'Srider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();

export {};