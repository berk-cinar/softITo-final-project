import { useContext } from "react"
import { PriceContext } from "./GrandmaComponent"

const DaughterComponent = ({quantity}) => {
    const price = useContext(PriceContext)//hook createcontext i burdan use context diyerek kullanabiliyoruz
  return (
    <div>
        <h5>Daughter</h5>
        Daughter Quantity: {quantity}<br/>
        Daughter Price: {price}<br/>
        <PriceContext.Consumer>
            {value => <strong>Price: {value}</strong>}
        </PriceContext.Consumer>
    </div>
  )
}

export default DaughterComponent