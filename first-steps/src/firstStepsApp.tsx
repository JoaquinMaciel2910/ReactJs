import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
    productName: string;
    quantity?: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Pro Controller", quantity: 2 },
    { productName: "Super Smash", quantity: 3 },

]

export const FirstStepsApp = () => {
    return (
        <>
            <h1>Cariito de compras</h1>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}



            {/* <ItemCounter productName="Nintendo Switch 2" quantity={20} />
            <ItemCounter productName="Pro Controller" quantity={10} />
            <ItemCounter productName="Nintendo Switch 2" quantity={30} />
 */}



        </>

    )

}