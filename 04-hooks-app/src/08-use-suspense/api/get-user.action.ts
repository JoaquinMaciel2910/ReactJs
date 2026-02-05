export interface User {
    id: number;
    name: string;
    username: string;
    location: string;
    rol: string;
}


export const getUserAction = async (id: number) => {
    await new Promise(resolve => resolve(setTimeout(resolve, 1500)));
    // Simulamos una llamada a una API
    return {
        id,
        name: 'Joaquin - #1',
        username: 'otawa',
        location: 'otawa',
        rol: 'Developer'
    };
}