


const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table (strider);