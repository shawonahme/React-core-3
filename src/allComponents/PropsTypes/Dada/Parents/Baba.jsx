import { useContext,  } from "react";
import { countContext } from "../../../../App";


const Baba = () => {

    const [money,setMoney] = useContext(countContext)
 
    return (
        <div>
            <h1>I am from Baba</h1>
            <h3>{money}</h3>
           
           <button onClick={()=>setMoney(money+10)}>my Btn</button>
        </div>
    );
};

export default Baba;