import { heroes, type Hero, Owner } from "../data/heroes.data"
/* 
const getHeroById = (id:number)=>{
    const hero = heroes.find((hero)=>hero.id===id)


    return hero;
}


console.log(getHeroById(4)) */


export const getHeroesByOwner = (franquicia:Owner)=>{

   var franq = heroes.filter(casa=>casa.owner===franquicia)


    return console.log(franq)
}


getHeroesByOwner(Owner.Marvel)