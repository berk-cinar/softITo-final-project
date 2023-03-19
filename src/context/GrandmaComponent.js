import { createContext } from "react";
import MommyComponent from "./MommyComponent"

export const PriceContext = createContext(100);

const GrandmaComponent = () => {
    const quantity = 3;
    const price = 300;
    return (
        <PriceContext.Provider value={price}>
            <div>
                <h1>Grandma</h1>
                Grandma Quantity = {quantity} Price: {price}
                <MommyComponent quantity={quantity} />
            </div>
        </PriceContext.Provider>
    )
}

export default GrandmaComponent