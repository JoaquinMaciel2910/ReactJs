interface Props {
    name: string
    quantity?: number
}


export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>{name}</span>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}



