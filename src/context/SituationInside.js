import { useState } from "react";

export const SituationInside = () => {

    const [condition,setCondition] = useState(true);

    const getConditional=()=>{
        if (condition) {
            return <div>Olumlu</div>
        }else{
            return <div>Olumsuz</div>
        }
    }

    const conditionChange=(event)=>{
        //setCondition(!condition);
        setCondition(event.target.checked);
    }

  return (
    <div>
        <h1>İçeride</h1>
        <input type="checkbox" checked={condition} onChange={conditionChange}/><br/>
        {getConditional()}
    </div>
  )
}
