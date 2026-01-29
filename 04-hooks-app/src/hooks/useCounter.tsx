import { useState } from "react"

export const useCounter = (iv: number = 1) => {

    const [counter, setCounter] = useState(iv)

    const increment = () => {
        setCounter((prev) => prev + 1)
    }

    const decrement = () => {
        if (counter <= 0) return

        setCounter((prev) => prev - 1)
    }

    return {
        //props
        counter,

        //methods
        increment,
        decrement
    }
}

