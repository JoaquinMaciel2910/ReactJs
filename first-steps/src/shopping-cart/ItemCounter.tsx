import { useState } from "react"

interface Props {
    name: string
    quantity?: number
}


export const ItemCounter = ({ name, quantity = 0 }: Props) => {

    /* Esto es un hook */
    const [count, setCount] = useState(quantity)
    /*----------------  */


    const handleAdd = () => { setCount(count + 1) }
    const handleSubtract = () => {
        if (count === 0) return;
        setCount(count - 1)
    }


    return (
        <section style={{ display: "flex", alignItems: "center", gap: 10 }}>

            <span>{name}</span>

            <button onClick={() => handleAdd()}> +1 </button>

            <span>{count}</span>

            <button onClick={() => handleSubtract()}>  -1</button>

        </section>
    )
}



