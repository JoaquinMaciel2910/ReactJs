function greet (name:string):string {
    return `hola ${name}`;
}

const message = greet('Joaquín');

const flecha = (name:string)=> `hola ${name}`;

console.log(flecha('Messi'));

console.log(message);


const getUser = (id : number|string) =>{
    return{
        uid : id,
        username : 'Joaquín',
        dni : 43692974
    }
}


console.log(getUser(35));

console.log(getUser('Maciel'));
