

export interface Passager {
    name: String;
    children?: string[];
}

const passenger1: Passager = {
    name: 'fernando',
}

const passenger2: Passager = {
    name: 'Melissa',
    children:['Natalia', 'Elizabeth'],
}


const printChildren = (passenger: Passager) => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren);

}

printChildren((passenger2));