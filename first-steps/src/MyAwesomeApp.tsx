/* export function MyAwesomeApp (){
    return(
        <>
            <h1>Joaquín</h1>
            <h3>Maciel</h3>
        </>
    )
} */

const firstName = "Joaquin";
const lastName = "Maciel";

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

export const MyAwesomeApp = () => {



    return (
        <>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>

            <p>{favoriteGames.join(", ")}</p>

            <h1>{isActive ? "Esta activo" : "Esta inactivo"}</h1>
        </>
    )
}