
interface Person{
    name : string,
    lastname : string,
    age : number,
    address : Address;
}

interface Address{
    city : string,
    country : string
}


const human : Person = {
    name : 'Joaquin',
    lastname : 'Maciel',
    age : 23,
    address : {
        city : 'CBA',
        country : 'Arg'
    }
}

human.name = 'Martin'
human.lastname = 'Palermo'
human.age = 56
human.address.city = 'BSAS'



/* const spiderman = structuredClone (human);

spiderman.name = 'Peter'
spiderman.lastname = 'Parker'
spiderman.age = 25
spiderman.address.city = 'NY'
spiderman.address.country = 'USA'

console.log(spiderman); */

console.log(human);

