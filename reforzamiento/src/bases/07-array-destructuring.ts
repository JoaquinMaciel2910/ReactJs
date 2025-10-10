const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [p1, a2, b3] = characterNames;

console.log({ p1, a2, b3 });

const [,,Trunks] = characterNames;

console.log({Trunks});



const returnArrayFn = ()=> ['ABC', 123] as const;

const [letters, numbers] = returnArrayFn();

console.log(letters+ 100);