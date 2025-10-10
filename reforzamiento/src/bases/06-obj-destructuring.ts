const person = {
    name : 'tony',
    age : 45,
    key : 'ironman'
};
/* 
const name = person.name;

const age  = person.age;

const  key  = person.key;

 */
/* 
console.log(name);
console.log(age);
console.log(key); */
/* 
const {name, age, key} = person;

console.log (name, age, key); */

interface Hero {
    name : string;
    age : number;
    key : string;
    rank? : string;
}

const useContext = ({key, age, name, rank = 'sin rango'}:Hero) =>{
    return{
        keyName: key,
        user : {
            age,  
            name,
        },
        rank : rank
    }
}


const context = useContext(person);

console.log(context);

const {keyName, user:{name}, rank} = useContext(person);

console.log(keyName, name, rank);