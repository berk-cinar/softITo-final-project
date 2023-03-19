import { useNavigate, useParams } from "react-router-dom";

export const NavigationTarget = () => {
    const { id } = useParams();

    const navigate=useNavigate();

    const getParametric=()=>{
        if(id){
            return(
                <div>
                    {/* Değiştirgen : {id} */}
                    Favorites
                </div>
            )
        }
    }

    const goToSource=()=>{
        navigate('/source');
    }

  return (
    <div>
        Erek: 
        {getParametric()} <br/>
        <button onClick={() => goToSource()}>Kaynağa Git</button>

    </div>
  )
}
