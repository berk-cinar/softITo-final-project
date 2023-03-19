import DaughterComponent from "./DaughterComponent"

const MommyComponent = ({quantity}) => {
  return (
    <div>
        <h3>Mommy</h3>
        Mommy Quantity: {quantity}
        <DaughterComponent quantity={quantity}/>
    </div>
  )
}

export default MommyComponent