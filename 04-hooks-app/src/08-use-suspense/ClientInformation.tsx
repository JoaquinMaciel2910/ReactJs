import { use } from 'react'
import { getUserAction } from './api/get-user.action'

const userPromise = getUserAction(1)


export const ClientInformation = (/* { id }: { id: number } */) => {

    const user = use(userPromise)



    /*    useEffect(() => {
           // Lógica para obtener la información del cliente
           getUserAction(id).then(user => console.log(user))
       }, [id
   
       ])
    */
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h2 className='text-4xl font-bold text-white'> {user.name} </h2>
            <p className='text-white text-2xl'> {user.rol}</p>
            <p className='text-white text-2xl'> {user.location}</p>

        </div>




    )
}
